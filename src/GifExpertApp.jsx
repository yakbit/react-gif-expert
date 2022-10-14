import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    const onAddCategory = (newCategory) => {
        const arrayEnMayusculas = categories.map(category => category.toUpperCase())
        if(arrayEnMayusculas.includes(newCategory.toUpperCase())) {return;}
        setCategories([ newCategory , ...categories])
    }

    const onEliminarCategoria = (category) => {
        const listaFiltrada = categories.filter((item) => item !== category )
        setCategories(listaFiltrada)
        

    }
  return (
    <>
        <h1> GifExpertApp </h1>

       
        <AddCategory 
            onNewCategory={event => onAddCategory(event)}
        />

        <ol>
            <h2>Categorías actuales: </h2>
            {categories.map(category => {return (
               
                    <h2 key={category}>
                        <li>
                            {category}
                            <button onClick={()=> onEliminarCategoria(category)} style={{marginLeft: 15}}>Eliminar categoria</button>
                         </li>
                        
                    </h2>
               
            )})}
        </ol>

            {categories.map(
                category => 
                     (
                        <GifGrid key={category} category={category}/>
                    )
            )}
    </>
  )
}
