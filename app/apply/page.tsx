"use client"

import { Decision } from "@/lib/scoring"
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

 

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const response = await fetch("/api/apply",{
      method :   "POST" ,
      headers : { "Content-Type"  : "application/json" },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    setScore(data.score)
    setDecision(data.decision)
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
  <div className="w-full max-w-md mt-8 bg-gray-800 rounded-xl p-6">
    
    {/* Score number */}
    <p className="text-gray-400 text-sm uppercase tracking-wide">Your Score</p>
    <p className="text-white text-6xl font-bold mt-2">{score}</p>

    {/* Progress bar */}
    <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
      <div
        className="bg-green-500 h-3 rounded-full"
        style={{ width: `${Math.min((score / 950) * 100, 100)}%` }}
      />
    </div>
    <div className="flex justify-between text-gray-500 text-xs mt-1">
      <span>0</span>
      <span>950</span>
    </div>

    {/* Decision badge */}
    <div className="mt-6">
      <p className="text-gray-400 text-sm uppercase tracking-wide">Decision</p>
      <span className={`inline-block mt-2 px-6 py-2 rounded-full text-white font-semibold text-lg ${
        decision === "Approved" ? "bg-green-500" :
        decision === "Refer" ? "bg-yellow-500" :
        "bg-red-500"
      }`}>
        {decision}
      </span>
    </div>

    {/* Applicant name */}
    <div className="mt-6 border-t border-gray-700 pt-4">
      <p className="text-gray-400 text-sm">Applicant</p>
      <p className="text-white font-semibold mt-1">{formData.fullName}</p>
    </div>

  </div>
)}

    </main>
  )
}

