import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

function TodoWrapperLocalStorage() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos)
    }, [])

    function addTodo(content) {
        const newTodos = [...todos, {
            id: Math.random() * 12000,
            task: content,
            completed: false,
            isEditing: false
        }]
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    function completeTaskHandler(id) {
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        setTodos(updatedTodos)

        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    function deleteTodo(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    function renderEditFormHandler(id) {
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo);
        setTodos(
            updatedTodos
        )
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    function updateTodoContent(todoContent, id) {
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, task: todoContent, isEditing: !todo.isEditing } : todo)
        setTodos(
            updatedTodos
        )
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ?
                    (<EditTodoForm
                        key={todo.id}
                        todoData={todo}
                        updateTodoContent={updateTodoContent}
                    />)
                    : (
                        <Todo
                            key={todo.id}
                            todoData={todo}
                            completeTaskHandler={completeTaskHandler}
                            deleteTodo={deleteTodo}
                            renderEditFormHandler={renderEditFormHandler}
                        />
                    )
            )}
        </div>
    )
}

export default TodoWrapperLocalStorage