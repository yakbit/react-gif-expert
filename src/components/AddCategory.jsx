import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onCambio = (evento) => {
        
        setInputValue(evento.target.value)
        
    }
   

    const onSubmit = (evento) => {
        evento.preventDefault();
        if (inputValue.trim().length <= 1 ) return
       /*  props.setCategories(categories => [inputValue, ...categories]) */
       onNewCategory(inputValue.trim())
        setInputValue('')
    }
  return (
<form onSubmit={event => onSubmit(event)}>
    <input 
            type="text" 
            placeholder={'Buscar gifs'} 
            value={inputValue} 
            onChange={e => {onCambio(e)}}
    />
</form>
   
  )
}
