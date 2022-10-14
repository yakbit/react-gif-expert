import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category, cantidadItems) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const result = await getGifs(category, cantidadItems)
        setImages(result)
        setIsLoading(false)
    }

    useEffect(()=>{
            getImages();
        }, [cantidadItems]
    )
    return {
        images: images,
        isLoading: isLoading
    }
}
