// src/store/todoStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoStore } from '../types/types';

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],

      // Add a new todo
      addTodo: (todo: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: uuidv4(), text: todo, completed: false },
          ],
        })),

      // Remove a todo by ID
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      // Toggle a todo's completion status
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
    }),
    {
      name: 'todo-storage', // Unique name for localStorage
      // Omit 'storage: localStorage' to fix TypeScript error
      // Zustand uses localStorage by default
    }
  )
);

export default useTodoStore;
