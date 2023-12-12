import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

function App() {

  return (
    <>
      <TodoCounter />
      <TodoSearch/>
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
