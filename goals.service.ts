import { Component, OnInit } from '@angular/core';
import { GoalsService, Goal } from './goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [];

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void {
    this.goalsService.getGoals().subscribe(data => {
      this.goals = data;
    });
  }

  addGoal(title: string, description: string): void {
    const newGoal: Goal = { title, description, completed: false };
    this.goalsService.addGoal(newGoal);
    this.loadGoals(); // Refresh the list
  }

  // Other methods to update or delete goals can be added here
}
