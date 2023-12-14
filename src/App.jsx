import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import { UseLocalStorage } from './hooks/UseLocalStorage'
import { UseHandleTodos } from './hooks/UseHandleTodos'

const TODOS_LIST = [
  {
    id: 1,
    text: 'Cortar cebolla',
    completed: false
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

function App() {
  const [saveTodos, todos] = UseLocalStorage('todos', TODOS_LIST)
  console.log('Entra a la apps')

  const [
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    competeTodos,
    deleteTodos] = UseHandleTodos(todos, saveTodos)


  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      {todos.length === 0
        ? <p>Crea tu primer TODO</p>
        : <TodoList>
          {
            searchedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={competeTodos}
                onDelete={deleteTodos}
              />
            ))
          }
        </TodoList>
      }

      <CreateTodoButton />
    </>
  )
}

export default App
