import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Sectionsongs from "../Sectionsongs/Sectionsongs";
import { fetchApinewAlbums, fetchApitoAlbums } from "../api/api";
import SongsbyGenere from "../SongsbyGenere/SongsbyGenere";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div>
        <Sectionsongs title={"Top Albums"} data={fetchApitoAlbums} />
        <Sectionsongs title={"New Albums"} data={fetchApinewAlbums} />
        <hr style={{ border: "2px solid  var(--color-Primary)" }} />
      </div>
      <SongsbyGenere />
    </>
  );
}

export default LandingPage;
