# 🏦 AI Loan Eligibility Engine

A full-stack AI-powered loan eligibility and credit scoring application built for the UK fintech market. Users can submit a loan application, receive a real-time credit score based on UK-aligned financial metrics, and get a personalised AI-generated explanation of their decision.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-green)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-orange)

---

## 🌐 Live Demo

**[View Live Application →](https://ai-loan-eligibility-next-47wijr5rh-abdul-munafs-projects.vercel.app)**

---

## 📸 Features

- **UK-Aligned Credit Scoring Engine** — Calculates a score from 0–950 based on real financial metrics used by UK lenders
- **Debt-to-Income Ratio (DTI)** — Assesses monthly debt obligations against income
- **Loan-to-Income Ratio (LTI)** — FCA-aligned affordability check
- **Employment Stability Scoring** — Weighs employment type (employed, self-employed, unemployed)
- **Credit History Assessment** — Optional credit score factor
- **AI Decision Explainer** — OpenAI GPT-4o-mini generates a personalised plain-English explanation of the decision
- **Approve / Refer / Decline Outcomes** — Clear decision bands aligned with UK lending standards
- **Application History** — All applications saved to PostgreSQL and viewable in a history dashboard
- **Responsive UI** — Clean, dark fintech-style interface built with Tailwind CSS

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL (Neon serverless) |
| ORM | Prisma |
| AI | OpenAI API (GPT-4o-mini) |
| Deployment | Vercel |

---

## 🧠 How the Scoring Engine Works

The credit scoring engine is built in TypeScript and applies four weighted factors:

| Factor | Metric | Max Points |
|---|---|---|
| Debt-to-Income Ratio | Monthly debt / monthly income | +150 |
| Loan-to-Income Ratio | Loan amount / annual income | +100 |
| Employment Type | Employed / Self-employed / Unemployed | +100 |
| Credit Score | Existing credit score (optional) | +100 |

**Score bands:**
- **700–950** → ✅ Approved
- **500–699** → ⚠️ Refer (manual review)
- **Below 500** → ❌ Declined

This approach is aligned with FCA (Financial Conduct Authority) affordability guidelines used by UK lenders.

---

## 🤖 AI Explanation

After scoring, the application sends the applicant's full financial profile to OpenAI GPT-4o-mini. The AI generates a personalised 3-4 sentence explanation that:

- Addresses the applicant by name
- Explains which factors helped or hurt the score
- Provides actionable improvement tips if declined or referred

This mirrors the FCA's requirement for transparent, explainable AI decisions in financial services.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or Neon account)
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ChNafi222/ai-loan-eligibility-next.git
cd ai-loan-eligibility-next
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root:
```env
DATABASE_URL="your-postgresql-connection-string"
OPENAI_API_KEY="your-openai-api-key"
```

4. **Run database migrations**
```bash
npx prisma migrate dev
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
ai-loan-eligibility-next/
├── app/
│   ├── page.tsx              # Homepage
│   ├── apply/
│   │   └── page.tsx          # Loan application form
│   ├── history/
│   │   └── page.tsx          # Application history
│   └── api/
│       ├── apply/
│       │   └── route.ts      # Score & save application
│       └── explain/
│           └── route.ts      # OpenAI explanation
├── lib/
│   ├── scoring.ts            # Credit scoring engine
│   └── prisma.ts             # Prisma client
├── prisma/
│   └── schema.prisma         # Database schema
└── .env                      # Environment variables
```

---

## 📊 Database Schema

```prisma
model Application {
  id             Int      @id @default(autoincrement())
  fullName       String
  annualIncome   Float
  employmentType String
  loanAmount     Float
  monthlyDebt    Float
  creditScore    Float?
  score          Int
  decision       String
  createdAt      DateTime @default(now())
}
```

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Neon) |
| `OPENAI_API_KEY` | OpenAI API key for AI explanations |

---

## 👨‍💻 Author

**Abdul Munaf**
- GitHub: [@ChNafi222](https://github.com/ChNafi222)
- LinkedIn: [ch-abdul-munaf](https://linkedin.com/in/ch-abdul-munaf)

---

## 📄 Licence

This project is open source and available under the [MIT Licence](LICENSE).
