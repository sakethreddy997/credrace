export type LoanType = "home" | "personal" | "two-wheeler" | "business";
export type IncomeBracket = "below_25k" | "25k_50k" | "50k_1l" | "above_1l";

export interface WarRoomInputs {
  loanAmount: number;
  incomeBracket: IncomeBracket;
  loanType: LoanType;
}

export interface Lender {
  id: number;
  name: string;
  shortName: string;
  color: string;
  baseRate: number;
}

export const lenders: Lender[] = [
  { id: 1, name: "HDFC Bank", shortName: "HDFC", color: "#004C8F", baseRate: 8.25 },
  { id: 2, name: "SBI", shortName: "SBI", color: "#2D6FAA", baseRate: 8.4 },
  { id: 3, name: "ICICI Bank", shortName: "ICICI", color: "#F07520", baseRate: 8.5 },
  { id: 4, name: "Axis Bank", shortName: "AXIS", color: "#800020", baseRate: 8.75 },
  { id: 5, name: "Kotak Mahindra", shortName: "KOTAK", color: "#EE0000", baseRate: 8.9 },
  { id: 6, name: "Bajaj Finserv", shortName: "BAJAJ", color: "#003399", baseRate: 9.1 },
  { id: 7, name: "Tata Capital", shortName: "TATA", color: "#00509E", baseRate: 9.25 },
  { id: 8, name: "LIC HFL", shortName: "LIC", color: "#006400", baseRate: 9.3 },
  { id: 9, name: "PNB Housing", shortName: "PNB", color: "#CC0000", baseRate: 9.45 },
  { id: 10, name: "IDFC First", shortName: "IDFC", color: "#0066CC", baseRate: 9.5 },
  { id: 11, name: "Yes Bank", shortName: "YES", color: "#003366", baseRate: 9.65 },
  { id: 12, name: "Bandhan Bank", shortName: "BANDHAN", color: "#E31837", baseRate: 9.8 },
  { id: 13, name: "Federal Bank", shortName: "FEDERAL", color: "#CC0000", baseRate: 9.95 },
  { id: 14, name: "IndusInd Bank", shortName: "INDUS", color: "#003366", baseRate: 10.1 },
  { id: 15, name: "Canara Bank", shortName: "CANARA", color: "#FF6600", baseRate: 10.25 },
  { id: 16, name: "Bank of Baroda", shortName: "BOB", color: "#E31837", baseRate: 10.4 },
  { id: 17, name: "Union Bank", shortName: "UNION", color: "#0066B3", baseRate: 10.55 },
  { id: 18, name: "Central Bank", shortName: "CENTRAL", color: "#0066B3", baseRate: 10.7 },
  { id: 19, name: "Muthoot Finance", shortName: "MUTHOOT", color: "#FF6600", baseRate: 10.85 },
  { id: 20, name: "Manappuram", shortName: "MANAPPURAM", color: "#006400", baseRate: 11.0 },
  { id: 21, name: "Aditya Birla Capital", shortName: "ABCL", color: "#000080", baseRate: 11.15 },
  { id: 22, name: "Shriram Finance", shortName: "SHRIRAM", color: "#CC0000", baseRate: 11.3 },
  { id: 23, name: "Chola Finance", shortName: "CHOLA", color: "#003366", baseRate: 11.45 },
  { id: 24, name: "Mahindra Finance", shortName: "MAHINDRA", color: "#C41230", baseRate: 11.6 },
  { id: 25, name: "Fullerton India", shortName: "FULLERTON", color: "#0066B3", baseRate: 11.75 },
  { id: 26, name: "Hero FinCorp", shortName: "HERO", color: "#E31837", baseRate: 11.9 },
  { id: 27, name: "IIFL Finance", shortName: "IIFL", color: "#003366", baseRate: 12.1 },
  { id: 28, name: "Sundaram Finance", shortName: "SUNDARAM", color: "#0066B3", baseRate: 12.3 },
  { id: 29, name: "TVS Credit", shortName: "TVS", color: "#CC0000", baseRate: 12.5 },
  { id: 30, name: "Home First", shortName: "HOMEFIRST", color: "#006400", baseRate: 12.65 },
];

const TENURE_MONTHS: Record<LoanType, number> = {
  home: 240,
  personal: 60,
  "two-wheeler": 48,
  business: 60,
};

const LOAN_TYPE_OFFSET: Record<LoanType, number> = {
  home: 0,
  personal: 2,
  "two-wheeler": 1,
  business: 4,
};

const INCOME_BRACKET_OFFSET: Record<IncomeBracket, number> = {
  below_25k: 0,
  "25k_50k": -0.25,
  "50k_1l": -0.5,
  above_1l: -0.75,
};

export function getTenureMonths(loanType: LoanType): number {
  return TENURE_MONTHS[loanType];
}

export function getAdjustedRate(lender: Lender, inputs: WarRoomInputs): number {
  let rate = lender.baseRate + LOAN_TYPE_OFFSET[inputs.loanType];
  rate += INCOME_BRACKET_OFFSET[inputs.incomeBracket];
  if (inputs.loanType === "home" && inputs.loanAmount > 25_00_000) {
    rate -= 0.15;
  }
  return Math.round(rate * 100) / 100;
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): number {
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
}

export function calculateSavings(
  principal: number,
  bestRate: number,
  worstRate: number,
  tenureMonths: number
): number {
  const bestTotalPayment =
    calculateEMI(principal, bestRate, tenureMonths) * tenureMonths;
  const worstTotalPayment =
    calculateEMI(principal, worstRate, tenureMonths) * tenureMonths;
  return Math.round(worstTotalPayment - bestTotalPayment);
}

export function formatCurrency(value: number): string {
  if (value >= 1_00_00_000) {
    return `₹${(value / 1_00_000).toFixed(1)} Cr`;
  }
  if (value >= 1_00_000) {
    return `₹${(value / 1_00_000).toFixed(2)} Lakh`;
  }
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatCurrencyFull(value: number): string {
  return "₹" + value.toLocaleString("en-IN");
}
