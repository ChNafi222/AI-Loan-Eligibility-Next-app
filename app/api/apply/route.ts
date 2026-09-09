import {NextRequest, NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"
import {calculateScore, getDecision} from "@/lib/scoring"

export async function POST(req : NextRequest) {
    const body = await req.json()
    const score = calculateScore(body)
    const decision = getDecision(score)

    const application = await prisma.application.create({
        data : {
            fullName : body.fullName,
            annualIncome : Number(body.annualIncome),
            employmentType : body.employmentType,
            loanAmount : Number(body.loanAmount),
            creditScore : body.creditScore ? Number(body.creditScore) : null,
            score,
            monthlyDebt : Number(body.monthlyDebt),
            
            decision
        }
    })
    return NextResponse.json({application,score,decision})
}
