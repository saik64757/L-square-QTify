import React, { useState } from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import styles from "./Searchbar.module.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 773,
  margin: 0,
  padding: 0,
  zIndex: 10,
  left: -100,
  top: 70,
  color: "var(--color-white)",
  position: "absolute",
  listStyle: "none",

  backgroundColor: "var(--color-black)",
  overflow: "auto",
  maxHeight: 300,
  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Searchbar({ searchData }) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData,
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/album/${value.slug}`, {
      state: searchData.filter((album) => {
        return album.slug === value.slug;
      }),
    });
  }

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.Serchwrap} onSubmit={handleSubmit}>
        <div>
          <div {...getRootProps()} className={styles.buttonandinput}>
            <Input
              {...getInputProps()}
              className={styles.serchinput}
              placeholder="Search Album"
              required
            />
            <button className={styles.serchButton} type="submit">
              <img src={require("../../Assetes/Searchicon.png")} alt="" />
            </button>
          </div>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li
                {...getOptionProps({ option, index })}
                style={{ height: "71px" }}
                key={index}
              >
                <div className={styles.listWrapper}>
                  <div className={styles.ListItem}>
                    <img
                      src={option.image}
                      alt=""
                      width={"66px"}
                      height={"71px"}
                    />
                    <div>
                      <Typography variant="h6">{option.title}</Typography>
                      {option?.songs[0]?.artists.map((artist, idx) => (
                        <Typography variant="caption" key={idx}>
                          Artist:{artist},
                        </Typography>
                      ))}
                      <Typography variant="caption">and Many more.</Typography>
                    </div>
                  </div>
                  <div>{option.follows} Follows</div>
                </div>
              </li>
            ))}
          </Listbox>
        ) : null}
      </form>
    </div>
  );
}

export default Searchbar;
