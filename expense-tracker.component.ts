
// expense-tracker.component.ts
import { Component } from '@angular/core';

interface Expense {
  description: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent {
  expenses: Expense[] = [];
  newExpense: Expense = { description: '', amount: 0, date: '' };

  addExpense(): void {
    if (this.newExpense.description && this.newExpense.amount && this.newExpense.date) {
      this.expenses.push({ ...this.newExpense });
      this.newExpense = { description: '', amount: 0, date: '' };
    }
  }

  deleteExpense(expense: Expense): void {
    this.expenses = this.expenses.filter(e => e !== expense);
  }
}
