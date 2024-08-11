// income-model.ts
export interface Income {
  id?: number;       // Optional unique identifier for the income entry
  source: string;    // The source of income (e.g., job, side hustle)
  amount: number;    // The amount of income
  date: string;      // The date when the income was received
}
