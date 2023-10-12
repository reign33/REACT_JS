import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({ todoData, completeTaskHandler, deleteTodo, renderEditFormHandler }) {
    return (
        <div className={'todo'}>
            <p className={`${todoData.isCompleted ? 'completed' : 'isCompleted'}`} onClick={() => completeTaskHandler(todoData.id)}>{todoData.task}</p>
            <div>
                <FontAwesomeIcon className={'edit-icon'} icon={faPenToSquare} onClick={() => renderEditFormHandler(todoData.id)} />
                <FontAwesomeIcon className={'delete-icon'} icon={faTrash} onClick={() => deleteTodo(todoData.id)} />
            </div>
        </div>
    )
}

export default Todo