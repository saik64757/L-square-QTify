import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Sectionsongs from "../Sectionsongs/Sectionsongs";
import { fetchApinewAlbums, fetchApitoAlbums } from "../api/api";
import SongsbyGenere from "../SongsbyGenere/SongsbyGenere";
import FaqSection from "../FaqSection/FaqSection";
import SongController from "../SongController/SongController";

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
      <FaqSection />
      <SongController />
    </>
  );
}

export default LandingPage;
