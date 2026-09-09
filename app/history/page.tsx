import { prisma } from "@/lib/prisma"

export default async function HistoryPage() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <main className="min-h-screen bg-gray-900 px-8 py-12">
      
      <h1 className="text-4xl font-bold text-white mb-8">
        Application History
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm uppercase border-b border-gray-700">
              <th className="pb-4">Name</th>
              <th className="pb-4">Score</th>
              <th className="pb-4">Decision</th>
              <th className="pb-4">Income</th>
              <th className="pb-4">Loan</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-gray-800 text-white">
                <td className="py-4">{app.fullName}</td>
                <td className="py-4">{app.score}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    app.decision === "Approved" ? "bg-green-500" :
                    app.decision === "Refer" ? "bg-yellow-500" :
                    "bg-red-500"
                  }`}>
                    {app.decision}
                  </span>
                </td>
                <td className="py-4">£{app.annualIncome.toLocaleString()}</td>
                <td className="py-4">£{app.loanAmount.toLocaleString()}</td>
                <td className="py-4 text-gray-400">
                  {new Date(app.createdAt).toLocaleDateString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </main>
  )
}