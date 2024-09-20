import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import useTodoStore from '../store/todoStore';
import { Todo } from '../types/types';
import styles from './TodoList.module.scss';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={styles.todoItem}>
      <span
        className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}
        onClick={() => toggleTodo(todo.id)}
        role="button"
        tabIndex={0}
        aria-pressed={todo.completed}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleTodo(todo.id);
          }
        }}
        aria-label={`Mark todo "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className={styles.deleteButton}
        aria-label={`Delete todo: ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
});

const TodoList: React.FC = () => {
  // Destructure the store with proper typing inferred from the Zustand store
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  // Initialize state with TypeScript type annotation
  const [newTodo, setNewTodo] = useState<string>('');

  // Handle input change with proper event typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo(''); // Clear the input after adding
    }
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Todo List</h1>
      <div className={styles.card}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo"
            className={styles.input}
            aria-label="New todo"
          />
          <button
            onClick={handleAddTodo}
            className={styles.addButton}
            aria-label="Add todo"
          >
            Add
          </button>
        </div>

        {todos.length > 0 ? (
          <ul className={styles.list}>
            {todos.map((todo: Todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.noTodos}>No todos available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
