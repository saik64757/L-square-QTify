import HeroSection from "../HeroSection/HeroSection";
import Sectionsongs from "../Sectionsongs/Sectionsongs";
import SongsbyGenere from "../SongsbyGenere/SongsbyGenere";
import FaqSection from "../FaqSection/FaqSection";
import { useOutletContext } from "react-router-dom";

function LandingPage() {
  const { data } = useOutletContext();
  return (
    <>
      <HeroSection />
      <div>
        <Sectionsongs title={"Top Albums"} data={data.topAlbums} />
        <Sectionsongs title={"New Albums"} data={data.newAlbums} />
        <hr style={{ border: "1px solid  var(--color-Primary)" }} />
      </div>
      <SongsbyGenere />
      <FaqSection />
    </>
  );
}

export default LandingPage;
