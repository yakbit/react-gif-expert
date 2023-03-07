import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    const arrayEnMayusculas = categories.map((category) =>
      category.toUpperCase()
    );
    if (arrayEnMayusculas.includes(newCategory.toUpperCase())) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  const onEliminarCategoria = (category) => {
    const listaFiltrada = categories.filter((item) => item !== category);
    setCategories(listaFiltrada);
  };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return (
    <div
      className="general-vision"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",

        marginBlockStart: 25,
        marginInline: 150,
        alignItems: "center",
        padding: "10px 400px",
      }}
    >
      <h1 className="glitch" style={{ textAlign: "center" }}>
        {" "}
        Buscador de gifs{" "}
      </h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.length > 0 && (
        <h2 style={{ marginTop: 75, color: "#9c27b0" }}>
          Categorías actuales:{" "}
        </h2>
      )}
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          borderRadius: 4,
          backgroundColor: "transparent",
        }}
        component="ul"
      >
        {categories.map((category) => {
          return (
            <ListItem key={category}>
              <Chip
                size="25"
                variant="outlined"
                color="secondary"
                label={category}
                onDelete={() => onEliminarCategoria(category)}
                sx={{
                  fontSize: 26,
                }}
              />
            </ListItem>
          );
        })}
      </Paper>

      {/*  {categories.map((category) => {
        return (
          <h2 key={category}>
            <li>
              {category}
              <button
                onClick={() => onEliminarCategoria(category)}
                style={{ marginLeft: 15 }}
              >
                Eliminar categoria
              </button>
            </li>
          </h2>
        );
      })} */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
