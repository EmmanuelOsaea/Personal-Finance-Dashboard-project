
// goals.component.ts
import { Component, OnInit } from '@angular/core';
import { Goal } from './goal.model';
import { GoalService } from '../services/goal.service'; // Assuming you have a GoalService

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [];

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void {
    this.goalService.getGoals().subscribe(goals => this.goals = goals);
  }

  addNewGoal(): void {
    const newGoal: Goal = {
      title: 'New Goal',
      targetAmount: 1000,
      savedAmount: 0,
      dueDate: new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
    };
    this.goalService.addGoal(newGoal).subscribe(goal => this.goals.push(goal));
  }

  deleteGoal(id?: number): void {
    if (id) {
      this.goalService.deleteGoal(id).subscribe(() => {
        this.goals = this.goals.filter(goal => goal.id !== id);
      });
    }
  }
}
