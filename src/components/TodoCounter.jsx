import PropTypes from 'prop-types'
import '../assets/css/TodoCounter.css'
function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
    )
}

TodoCounter.propTypes = {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired
}

export default TodoCounter
