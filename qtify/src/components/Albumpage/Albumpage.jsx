import { Typography } from "@mui/material";
import styles from "./Albumpage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import Button from "../Button/Button";
import { useState } from "react";
import SongsListSection from "../SongsListSection/SongsListSection";

const Albumpage = () => {
  const [more, setMore] = useState(true);
  const location = useLocation();
  const data = location.state;
  const [Album] = data;

  const navigate = useNavigate();

  const minutes = Album.songs.reduce((accumulator, currentValue) => {
    return (accumulator += Math.floor(currentValue.durationInMs / 10000));
  }, 0);

  return (
    <div className={styles.AlbummainSectionWrapper}>
      <section className={styles.AlbumDetailsSection}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={require("./../../Assetes/BackButton.png")}
            alt=""
            width={"40px"}
            height={"40px"}
          />
        </button>
        <div className={styles.AlbuDetails}>
          <img
            src={Album.image}
            alt={Album.slug}
            className={styles.albumImge}
          />
          <div className={styles.albumtext}>
            <Typography variant="h3" color="common.white">
              {Album.title}
            </Typography>
            {more ? (
              <Typography variant="subtitle1" color="common.white">
                {Album.description.slice(0, 100)}...
                <button
                  className={styles.moreButton}
                  onClick={() => {
                    setMore(!more);
                  }}
                >
                  more
                </button>
              </Typography>
            ) : (
              <Typography variant="subtitle1" color="common.white">
                {Album.description}
                <button
                  className={styles.moreButton}
                  onClick={() => {
                    setMore(!more);
                  }}
                >
                  close
                </button>
              </Typography>
            )}

            <div className={styles.Listitems}>
              <p>{Album?.songs?.length} Songs</p>
              <FiberManualRecordIcon fontSize="small" />
              <p>{Math.floor(minutes / 60)} hrs</p>
              <FiberManualRecordIcon fontSize="small" />
              <p>{Album?.follows} Follows</p>
            </div>
            <div className={styles.detailButtons}>
              <Button
                Message={"Shuffle"}
                buttonColor={"--color-white"}
                backgroundColor={"#34c94b"}
              >
                <ShuffleIcon />
              </Button>
              <Button
                Message={"Add to library"}
                buttonColor={"--color-Primary"}
                backgroundColor={"black"}
              >
                <img
                  src={require("../../Assetes/LibraryIcon.png")}
                  alt=""
                  width={"33px"}
                  height={"26px"}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SongsListSection songsList={Album.songs} />
    </div>
  );
};

export default Albumpage;
