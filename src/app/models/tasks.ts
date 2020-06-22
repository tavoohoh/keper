export interface TasksModel {
  weekdaysTasks: Array<{
    date: string;
    weekday: string;
    tasks: {
      cookingTask: string;
      dishwashingTask: string;
    };
  }>;
}
