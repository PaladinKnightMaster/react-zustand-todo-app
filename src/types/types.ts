export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];

  // Action to add a new todo
  addTodo: (todo: string) => void;

  // Action to remove a todo by its ID
  removeTodo: (id: string) => void;

  // Action to toggle the completion status of a todo by its ID
  toggleTodo: (id: string) => void;
}
