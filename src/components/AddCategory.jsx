import React, { useState } from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { height, maxWidth, textAlign } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onCambio = (evento) => {
    setInputValue(evento.target.value);
  };

  const onSubmit = (evento) => {
    evento.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <div style={{ display: "flex" }}>
      <form
        onSubmit={(event) => onSubmit(event)}
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginRight: 10,
        }}
      >
        <SearchBox
          styles={{
            root: {
              width: 370,
              textAlign: "center",
              height: 70,
              fontSize: 25,
              borderRadius: 25,
            },
          }}
          placeholder="Buscar gifs..."
          value={inputValue}
          onChange={(e) => {
            onCambio(e);
          }}
          iconProps={{
            iconName: "Search",
            style: {
              fontSize: 30,
            },
          }}
          clearButtonProps={{
            onClick: () => setInputValue(""),
          }}
        />

        {/*  <input
        style={{ maxWidth: 250 }}
        type="text"
        placeholder={"Buscar gifs"}
        value={inputValue}
        onChange={(e) => {
          onCambio(e);
        }}
      /> */}
      </form>
      <Button
        startIcon={<SearchIcon />}
        variant="contained"
        sx={{ borderRadius: 7 }}
        onClick={(event) => onSubmit(event)}
      >
        Buscar
      </Button>
    </div>
  );
};
