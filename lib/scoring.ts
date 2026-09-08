export type Decision = "Approved" | "Refer" | "Declined"

export interface LoanApplicant {
  fullName: string
  annualIncome: number
  employmentType: "employed" | "unemployed" | "self-employed"
  loanAmount: number
  creditScore?: number
  monthlyDebt: number
}


export function calculateScore(applicant: LoanApplicant): number {
  let score = 500

  const monthlyIncome = applicant.annualIncome / 12
  const dti = (applicant.monthlyDebt / monthlyIncome) * 100

  if (dti < 20) {
    score += 150
  } else if (dti <= 40) {
    score += 75
  } else {
    score -= 100
  }

  const lti = applicant.loanAmount / applicant.annualIncome

  if (lti < 3) {
    score += 100
  } else if (lti <= 4.5) {
    score += 40
  } else {
    score -= 150
  }

  if (applicant.employmentType === "employed") {
    score += 100
  } else if (applicant.employmentType === "self-employed") {
    score += 50
  } else {
    score -= 200
  }

  if (applicant.creditScore && applicant.creditScore > 700) {
    score += 100
  } else if (applicant.creditScore && applicant.creditScore >= 500) {
    score += 50
  } else if (applicant.creditScore && applicant.creditScore < 500) {
    score -= 75
  }

  return score
}

export function getDecision(score: number): Decision {
  if (score > 700) {
    return "Approved"
  } else if (score <= 700 && score >= 500) {
    return "Refer"
  } else {
    return "Declined"
  }
}