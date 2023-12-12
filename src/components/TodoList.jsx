import PropTypes from 'prop-types'
import '../assets/css/TodoList.css'

function TodoList({ children }) {
    return (
        <ul className='TodoList'>
            {children}
        </ul>

    )
}

TodoList.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

export default TodoList
