export enum Priority {
    LOW, MEDIUM, HIGH
}

export class Todo {
      id: number;
      name: string;
      description: string;
      priority: Priority;
      done: boolean;
}
