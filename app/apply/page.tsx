"use client"

import { calculateScore, getDecision, LoanApplicant, Decision } from "@/lib/scoring"
import { useState } from "react"

export default function ApplyPage() {

  const [formData, setFormData] = useState({
    fullName: "",
    annualIncome: "",
    employmentType: "",
    loanAmount: "",
    creditScore: "",
    monthlyDebt: ""
  })

  const [score, setScore] = useState<number | null>(null)
  const [decision, setDecision] = useState<Decision | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const applicant: LoanApplicant = {
      fullName: formData.fullName,
      annualIncome: Number(formData.annualIncome),
      employmentType: formData.employmentType as "employed" | "unemployed" | "self-employed",
      loanAmount: Number(formData.loanAmount),
      creditScore: formData.creditScore ? Number(formData.creditScore) : undefined,
      monthlyDebt: Number(formData.monthlyDebt)
    }

    const result = calculateScore(applicant)
    const outcome = getDecision(result)

    setScore(result)
    setDecision(outcome)
  }

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      
      <h1 className="text-4xl font-bold text-white">
        Loan Application
      </h1>

      <p className="text-gray-400 mt-4">
        Fill in your details to check your eligibility
      </p>

      <form className="w-full max-w-md mt-8" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        />

        <input
          type="number"
          placeholder="Annual Income (£)"
          value={formData.annualIncome}
          onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        />

        <input
          type="number"
          placeholder="Loan Amount (£)"
          value={formData.loanAmount}
          onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        />

        <input
          type="number"
          placeholder="Monthly Debt (£)"
          value={formData.monthlyDebt}
          onChange={(e) => setFormData({ ...formData, monthlyDebt: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        />

        <input
          type="number"
          placeholder="Credit Score (Optional)"
          value={formData.creditScore}
          onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        />

        <select
          value={formData.employmentType}
          onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
        >
          <option value="">Select Employment Type</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold mt-6"
        >
          Check Eligibility
        </button>

      </form>

      {score !== null && (
        <div className="mt-8 text-center">
          <p className="text-white text-2xl font-bold">Score: {score}</p>
          <p className="text-green-400 text-xl mt-2">Decision: {decision}</p>
        </div>
      )}

    </main>
  )
}

