-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "annualIncome" DOUBLE PRECISION NOT NULL,
    "employmentType" TEXT NOT NULL,
    "loanAmount" DOUBLE PRECISION NOT NULL,
    "monthlyDebt" DOUBLE PRECISION NOT NULL,
    "creditScore" DOUBLE PRECISION,
    "score" INTEGER NOT NULL,
    "decision" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
