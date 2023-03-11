import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CardGrid from "../CardGrid/CardGrid";
import axios from "axios";

function LandingPage() {
  const [topAlbums, settopAlbums] = useState([]);

  const fetchApitoAlbums = async () => {
    try {
      let TopAlbums = await axios.get(
        "https://qtify-backend-gye4ebhsbpfea8g9.z01.azurefd.net/albums/top"
      );
      settopAlbums(TopAlbums.data);
    } catch (error) {}
  };

  useEffect(() => {
    // Update the document title using the browser API
    fetchApitoAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <CardGrid topAlbums={topAlbums} />
    </>
  );
}

export default LandingPage;
