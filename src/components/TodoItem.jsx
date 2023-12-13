import PropTypes from 'prop-types'
import '../assets/css/TodoItem.css'
function TodoItem({ text, completed, onComplete, onDelete}) {
    return (
        <li className='TodoItem'>
            <span onClick={() => onComplete(text)} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <span onClick={() => onDelete(text)} className="Icon Icon-delete">X</span>
        </li>
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TodoItem