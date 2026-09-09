import {NextResponse, NextRequest } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { fullName, annualIncome, employmentType, loanAmount, monthlyDebt,
      creditScore, score, decision } = body

    const prompt = `You are a UK financial advisor explaining a
    loan eligibility decision to an applicant.
    
    Applicant details:
    - Name: ${fullName}
    - Annual Income: £${annualIncome}
    - Employment Type: ${employmentType}
    - Loan Amount Requested: £${loanAmount}
    - Monthly Debt: £${monthlyDebt}
    - Credit Score: ${creditScore || "Not provided"}
    - Eligibility Score: ${score} out of 950
    - Decision: ${decision}

    Write a clear, friendly, 3-4 sentence explanation of this decision in plain English.
    Explain which factors helped or hurt the score.
    If declined or referred, give 2-3 specific actionable tips to improve eligibility.
    Keep it professional but easy to understand. Address the applicant by first name.`

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300
    })

    const explanation = response.choices[0].message.content
    return NextResponse.json({ explanation })

  } catch (error) {
    console.error("OpenAI error:", error)
    return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 })
  }
}