//Para creación de esqueleto base poner rfc y pulsar enter
import React from 'react'
import { TodoItem } from './TodoItem'

// Export TodoList component
export function TodoList({ todos, toggleTodo }) {
  // Map over todos and render TodoItem for each todo
  return (
    <ul>
      {todos.map((todo) => (
        // Render TodoItem with unique key, todo, and toggleTodo props
        <TodoItem key= {todo.id} todo={todo} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  )
}

