
// dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalBalance: number;
  monthlyExpenses: number;
  recentTransactions: { date: string, description: string, amount: number }[];

  constructor() {
    // Initialize data with default values or fetch from a service
    this.totalBalance = 0;
    this.monthlyExpenses = 0;
    this.recentTransactions = [];
  }

  ngOnInit(): void {
    // Fetch data from a service or initialize data here
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Simulate fetching data
    this.totalBalance = 5000; // Example value
    this.monthlyExpenses = 1200; // Example value
    this.recentTransactions = [
      { date: '2024-08-01', description: 'Groceries', amount: -50 },
      { date: '2024-08-02', description: 'Salary', amount: 3000 },
      { date: '2024-08-03', description: 'Rent', amount: -1000 },
    ];
  }
}
