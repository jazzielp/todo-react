import '../assets/css/TodoSearch.css'
import { useState } from 'react'
function TodoSearch() {
    const [searchValue, setSearchValue] = useState('')

    const handlechange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <input onChange={(e) => handlechange(e)} placeholder="Cebolla" className="TodoSearch" />
            {
                console.log(searchValue)
            }
        </>
    )
}
export default TodoSearch
