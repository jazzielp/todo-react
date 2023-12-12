import PropTypes from 'prop-types'
function TodoItem({ text, completed }) {
    return (
        <li>
            <span>V</span>
            <p>{text}</p>
            <span>X</span>
        </li>
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}
export default TodoItem