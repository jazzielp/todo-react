import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

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
      completed: false 
    },
    { 
      id: 3,
      text: 'Llorar con la llorona', 
      completed: false 
    },
  ]

  return (
    <>
      <TodoCounter total={10} completed={5} />
      <TodoSearch />
      <TodoList>
        {
          TODOS_LIST.map(todo => (
            <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
