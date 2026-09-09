import Link from "next/link"; 

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div>
         <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
              UK Fintech Tool
         </span>
         <h1 className="text-4xl font-bold text-white mt-4">
           AI Loan Eligibility Engine
         </h1>
         <p className="text-gray-400 text-xl text-center mt-4">
            Check your loan eligibility in seconds using AI-powered credit scoring.
         </p>

        <Link 
  href="/apply" 
  className="block text-center bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold mt-8"
>
  Check My Eligibility
</Link>
<Link href="/history"
className="block text-center text-gray-400 mt-4 unwerline hover:text-white">
  View Application History

</Link>
        
      </div>
    </main>
  )
}