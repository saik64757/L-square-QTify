import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import axios from "axios";
import Sectionsongs from "../Sectionsongs/Sectionsongs";
import { fetchApinewAlbums, fetchApitoAlbums } from "../api/api";

// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sectionsongs title={"Top Albums"} data={fetchApitoAlbums} />
      {/* <Sectionsongs title={"New Albums"} data={fetchApinewAlbums} /> */}
    </>
  );
}

export default LandingPage;
