import '../assets/css/TodoSearch.css'
function TodoSearch() {
    const handlechange = (e) => {
        console.log(e.target.value)
    }
    
    return (
        <input onChange={(e) => handlechange(e)} placeholder="Cebolla" className="TodoSearch"/>
    )
}
export default TodoSearch
