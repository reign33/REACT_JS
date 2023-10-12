
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos((prevState) => {
            const newTodo = {
                id: Math.random() * 100,
                task: todo,
                isCompleted: false,
                isEditing: false
            }
            return [...prevState, newTodo]
        })
    }

    function completeTaskHandler(id) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        )
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function updateTodoContent(todoContent, id) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, task: todoContent, isEditing: !todo.isEditing } : todo)
        )
    }

    function renderEditFormHandler(id) {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        )
    }

    return (
        <div className={'todo-wrapper'}>
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ?
                    (<EditTodoForm
                        key={todo.id}
                        updateTodoContent={updateTodoContent}
                        todoData={todo}
                    />)
                    : (
                        <Todo
                            key={todo.id}
                            todoData={todo}
                            completeTaskHandler={completeTaskHandler}
                            deleteTodo={deleteTodo}
                            renderEditFormHandler={renderEditFormHandler} />
                    )
            )}
        </div>
    )
}

export default TodoWrapper;