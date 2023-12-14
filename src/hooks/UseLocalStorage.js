import { useState, useEffect } from 'react'
export function UseLocalStorage(itemName, initialValue) {
  const [items, setItem] = useState([])
  
  useEffect(() => {
    if (!localStorage.getItem(itemName)) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
    }
  }, [itemName, initialValue])
  
  let itemLocalStorage = JSON.parse(localStorage.getItem(itemName))
  setItem(itemLocalStorage)

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [
    saveItem,
    items
  ]

}