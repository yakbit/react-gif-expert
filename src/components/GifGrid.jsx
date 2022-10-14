import { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const [cantidadItems, setCantidadItems] = useState(2)
    const {images, isLoading} = useFetchGifs(category, cantidadItems)
    const onMostrarMas = () => {
        setCantidadItems(cantidadItems+1)
    }
    const onMostrarMenos = () => {
        setCantidadItems(cantidadItems-1)
    }
    console.log("aumenta")
    
   
  return (
    <div>
        <h3>
            {category}            
        </h3>
        <button onClick={onMostrarMas} style={{marginRight: 10}}>+</button>
            {cantidadItems}
        <button onClick={onMostrarMenos} style={{marginLeft: 10}}>-</button>
        {isLoading && <h2>Cargando...</h2>}
        <div className="card-grid">
            {images.map((img) => {
                return (
                    <GifItem 
                        key={img.id}
                        {...img}
                    />
                )
            })}
        </div>
    </div>
  )
}
