// goal.model.ts
export interface Goal {
  id?: number;          // Optional unique identifier for the goal
  title: string;        // Title of the goal
  description?: string; // Optional detailed description of the goal
  targetAmount: number; // The financial target for the goal
  savedAmount: number;  // The amount currently saved towards the goal
  dueDate: string;      // The due date by which the goal should be achieved
}
