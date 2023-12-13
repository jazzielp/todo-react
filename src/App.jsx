import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import { useState } from 'react'

function App() {

  const TODOS_LIST = [
    {
      id: 1,
      text: 'Cortar cebolla',
      completed: true
    },
    {
      id: 2,
      text: 'Tomar el curso de intro a React',
      completed: true
    },
    {
      id: 3,
      text: 'Llorar con la llorona',
      completed: false
    },
  ]

  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(TODOS_LIST)
  const completedTodos = todos
    .filter(todo => todo.completed === true).length

  const totalTodos = todos.length
  const searchedTodos = todos.
    filter(todo =>
      todo.text
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
