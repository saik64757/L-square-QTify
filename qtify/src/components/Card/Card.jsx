import React from "react";
import styles from "./Card.module.css";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function Card({ data }) {
  return (
    <LightTooltip
      title={data.songs && `${data.songs.length} songs`}
      placement="top"
      arrow
    >
      <div className={styles.CardWrapper}>
        <div className={styles.cardContent}>
          <img src={data.image} alt="" />
          {data.follows ? (
            <p>{data.follows} Follows</p>
          ) : (
            <p>{data.likes} Likes</p>
          )}
        </div>
        <p>{data.title}</p>
      </div>
    </LightTooltip>
  );
}

export default Card;
