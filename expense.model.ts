
// expense-model.ts
export interface Expense {
  id?: number;            // Optional ID field for identifying expenses
  description: string;    // A description of the expense
  amount: number;         // The amount of the expense
  date: string;           // The date of the expense (in ISO format or a similar string format)
}
