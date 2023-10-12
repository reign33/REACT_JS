import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'


function TodoWrapper(){
    return(<div className={'todo-wrapper'}>
        <h1>Get Things Done</h1>
        <form className={'todo-form'}>
            <input type="text" placeholder={'What is the task today?'} className="todo-input"/>
            <button className={'todo-btn'}>Add Task</button>
        </form>
        <div className={'todo'}>
            <p className={'incompleted'}>Im gonna Learn react!</p>
            <div>
                <FontAwesomeIcon className={'edit-icon'} icon={faPenToSquare}/>
                <FontAwesomeIcon className={'delete-icon'} icon={faTrash}/>
            </div>
        </div>
        </div>)
}

export default TodoWrapper;