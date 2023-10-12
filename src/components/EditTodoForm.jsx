import React, { useState } from 'react'

function EditTodoForm({ updateTodoContent, todoData }) {
    const [value, setValue] = useState(todoData.task)

    function handleSubmit(e) {
        e.preventDefault();
        updateTodoContent(value, todoData.id)
    }

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    return (
        <form
            className={'todo-form'}
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Update Task' className='todo-input'
                value={value}
                onChange={handleInputChange}
            />
            <button
                className='todo-btn'
                type="submit">Edit Task
            </button>
        </form>
    )
}

export default EditTodoForm