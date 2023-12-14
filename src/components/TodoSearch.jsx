import '../assets/css/TodoSearch.css'
import PropTypes from 'prop-types'
function TodoSearch({ setSearchValue, searchValue}) {
  console.log('Entra a TodoSearch')

    const handlechange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <input onChange={(e) => handlechange(e)} value={searchValue} placeholder="Cebolla" className="TodoSearch" />
        </>
    )
}

TodoSearch.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
}

export default TodoSearch
