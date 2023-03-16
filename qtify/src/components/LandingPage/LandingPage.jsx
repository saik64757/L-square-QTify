import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import axios from "axios";
import Sectionsongs from "../Sectionsongs/Sectionsongs";
import { fetchApinewAlbums, fetchApitoAlbums } from "../api/api";
import SongsbyGenere from "../SongsbyGenere/SongsbyGenere";
import { red } from "@mui/material/colors";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        <Sectionsongs title={"Top Albums"} data={fetchApitoAlbums} />
        <Sectionsongs title={"New Albums"} data={fetchApinewAlbums} />
        <hr style={{ border: "1px solid  var(--color-Primary)" }} />
      </div>
      <SongsbyGenere />
    </>
  );
}

export default LandingPage;
