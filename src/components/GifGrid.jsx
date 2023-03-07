import { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const GifGrid = ({ category }) => {
  const [cantidadItems, setCantidadItems] = useState(2);
  const { images, isLoading } = useFetchGifs(category, cantidadItems);
  const onMostrarMas = () => {
    setCantidadItems(cantidadItems + 1);
  };
  const onMostrarMenos = () => {
    cantidadItems === 0 ? null : setCantidadItems(cantidadItems - 1);
  };

  return (
    <div style={{ marginBottom: 100 }}>
      <div
        style={{ display: "flex", alignItems: "baseline", marginBottom: 15 }}
      >
        <h3 style={{ color: "#4268e4", marginTop: 25 }}>{category}</h3>
        <button
          onClick={onMostrarMenos}
          style={{
            marginLeft: 10,
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
        >
          <RemoveCircleOutlineIcon color="primary" fontSize="large" />
        </button>
        <dev style={{ fontSize: 27, color: "#4268e4" }}>{cantidadItems}</dev>
        <button
          onClick={onMostrarMas}
          style={{
            marginLeft: 4,
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
        >
          <AddCircleOutlineIcon
            color="primary"
            fontSize="large"
          ></AddCircleOutlineIcon>
        </button>
      </div>

      {isLoading && <h2>Cargando...</h2>}
      <div className="grid-gallery">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};
