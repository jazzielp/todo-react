import { useState } from 'react'
export function UseLocalStorage(itemName, initialValue) {
    if (!localStorage.getItem(itemName)) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
    } 
    
    let itemLocalStorage = JSON.parse(localStorage.getItem(itemName))
    const [items, setItem] = useState(itemLocalStorage)
  
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