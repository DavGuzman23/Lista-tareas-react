import React, {Fragment, useRef, useState, useEffect} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4} from "uuid";

const KEY = 'todoApp.todos'

export function App(){
   // initialize todos state
   const [todos, setTodos, setItem] = useState([
       {id:1, task: 1, completed: false}
   ])

   // create ref for TodoTask input
   const TodoTaskRef = useRef();

   // load stored todos on component mount
   useEffect(() => {
       const storedTodos = JSON.parse(localStorage.getItem(KEY));
       if(storedTodos){
           setTodos(storedTodos)
       }
   }, []);

   // save todos to localStorage on change
   useEffect(() => {
       localStorage.setItem(KEY, JSON.stringify(todos))
   }, [todos])

   // toggle completed status of todo
   const toggleTodo = (id) => {
       const newTodos = [...todos];
       const todo = newTodos.find((todo) => todo.id === id);
       todo.completed = !todo.completed;
       setTodos(newTodos);
   }

   // add new todo to list
   const handleToDoAdd = () => {
       const task = TodoTaskRef.current.value;
       if (task === " ")return; // check for empty input

       setTodos((prevTodos) => {
           return [...prevTodos, {id: uuidv4(), task, completed: false}]
       })

       TodoTaskRef.current.value = null; // clear input
   }

    const handleClearAll = () => {
        const newTodos = todos.filter((todo)=>!todo.completed)
        setTodos(newTodos)
    }
    // pass todos as a prop to TodoList
    return (
        <Fragment>
            < TodoList todos={todos} toggleTodo = {toggleTodo}/>
            <input ref={TodoTaskRef} type="text" placeholder="Nueva tarea"/>
            <button onClick={handleToDoAdd}>Añadir</button>
            <button onClick={handleClearAll}>Eliminar</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length}</div>
        </Fragment>
       
    )
}