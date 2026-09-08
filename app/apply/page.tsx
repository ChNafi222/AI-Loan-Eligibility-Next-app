"use client"

import { useState } from "react";




export default function ApplyPage(){
const [formData, setFormData] = useState({
    fullName: "",
    annualIncome: "",
    employmentType: "",
    loanAmount: "",
    creditScore: "",
    monthlyDebt: ""
})

    return (
        <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
                Loan Application
                </h1>


                <p className="text-gray-400 mt-4">
                    Fill in your details to check your eligibility
                </p>

                <form className="w-full max-w-md mt-8">

                <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                />

                <input
                type="number"
                placeholder="Annual Income"
                value={formData.annualIncome}
                onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                />

                <input
                type="number"
                placeholder="Loan Amount"
                value={formData.loanAmount}
                onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                />

                <input
                type="number"
                placeholder="Credit Score (Optional)"
                value={formData.creditScore}
                onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                />

                <input
                type="number"
                placeholder="Monthly Debt"
                value={formData.monthlyDebt}
                onChange={(e) => setFormData({...formData, monthlyDebt: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                />

                <select
                value={formData.employmentType}
                onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mt-4"
                >
                    <option value="">Select Employment Type</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="self-employed">Self-Employed</option>
                </select>   

                <button
                type="submit"
                className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold mt-6"
                >
                    Check Eligibility
                </button>
                </form>
        </main>
    )
}