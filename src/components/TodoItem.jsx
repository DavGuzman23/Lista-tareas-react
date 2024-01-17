import React from 'react'

// Todo item component
export function TodoItem( {todo, toggleTodo} ) {
    // Destructuring todo props
    const {id, task, completed} = todo
 
    // Handle todo click function
    const handleTodoClick = () => {
        // Toggle todo by id
        toggleTodo(id)
    }
 
  // Return JSX for todo item
  return (
    <li>
        {/* Checkbox input for todo */}
        <input type='checkbox' checked= {completed} onChange={handleTodoClick}/>
        {/* Todo task */}
        {task}
    </li>
  )
 }
