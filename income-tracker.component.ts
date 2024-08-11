// income-tracker.component.ts
import { Component, OnInit } from '@angular/core';
import { Income } from './income.model'; // Define a model for Income (like Goal)
import { IncomeService } from '../services/income.service'; // Assuming you have an IncomeService

@Component({
  selector: 'app-income-tracker',
  templateUrl: './income-tracker.component.html',
  styleUrls: ['./income-tracker.component.css']
})
export class IncomeTrackerComponent implements OnInit {
  incomes: Income[] = [];

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.loadIncomes();
  }

  loadIncomes(): void {
    this.incomeService.getIncomes().subscribe(incomes => this.incomes = incomes);
  }

  addNewIncome(): void {
    const newIncome: Income = {
      source: 'New Income Source',
      amount: 500,
      date: new Date().toISOString().split('T')[0]
    };
    this.incomeService.addIncome(newIncome).subscribe(income => this.incomes.push(income));
  }

  deleteIncome(id?: number): void {
    if (id) {
      this.incomeService.deleteIncome(id).subscribe(() => {
        this.incomes = this.incomes.filter(income => income.id !== id);
      });
    }
  }
}
