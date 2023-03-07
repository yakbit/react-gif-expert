import { KEY } from "./urlKey";

export const getGifs = async (category, cantidadItems) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${category}&limit=${cantidadItems}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
