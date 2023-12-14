import { useState } from "react";

export function UseHandleTodos (todos, saveTodos) {
    const [searchValue, setSearchValue] = useState('')

    const completedTodos = todos
        .filter(todo => todo.completed === true).length

    const totalTodos = todos.length
    const searchedTodos = todos.
        filter(todo =>
            todo.text
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        )

    const competeTodos = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        // setTodos(newTodos)
        saveTodos(newTodos)
    }

    const deleteTodos = (text) => {
        const newTodos = [...todos]
        const filterTodo = newTodos.filter(todo => todo.text !== text)
        // setTodos(filterTodo)
        saveTodos(filterTodo)
    }

    return [
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        competeTodos,
        deleteTodos
    ]
}