import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SongController from "./components/SongController/SongController";
import {
  fetchAllsongs,
  fetchApinewAlbums,
  fetchApitoAlbums,
} from "./components/api/api";
import FeedBackModal from "./components/FeedBackModal/FeedBackModal";

function App() {
  const [data, setdata] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setdata((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchApitoAlbums);
    generateData("newAlbums", fetchApinewAlbums);
    generateData("songs", fetchAllsongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]}>
          <FeedBackModal />
        </Navbar>
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
        <SongController />
      </StyledEngineProvider>
    </>
  );
}

export default App;
