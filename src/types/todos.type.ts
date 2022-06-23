export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export type ITodoItems = Array<ITodoItem>
