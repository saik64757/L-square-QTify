import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./SongsbyGenere.module.css";
import { styled } from "@mui/material/styles";
import Carousel from "../Carousel/Carousel";
import { fetchgenres, fetchAllsongs } from "../api/api";
import Card from "../Card/Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, color: "white" }}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "var(--color-Primary)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 225, 0.7)",
    "&.Mui-selected": {
      color: "white",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function SongsbyGenere() {
  const [value, setValue] = React.useState(0);
  const [allGenere, setallGenere] = React.useState([]);
  const [allSongs, setallSongs] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    (async () => {
      try {
        let data = await fetchgenres();
        let songs = await fetchAllsongs();
        setallGenere([
          {
            key: "all",
            label: "All",
          },
          ...data.data,
        ]);
        setallSongs(songs);
      } catch (error) {
        return error;
      }
    })();
  }, []);

  return (
    <div className={styles.SongsbyGenere}>
      <div className={styles.sectionTitle}>Songs</div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ bgcolor: "inherit" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            {allGenere.map((data) => (
              <StyledTab label={data.label} key={data.key} />
            ))}
          </StyledTabs>
        </Box>
        {allGenere.map((ele) => (
          <TabPanel value={value} index={allGenere.indexOf(ele)} key={ele.key}>
            <Carousel
              data={allSongs.filter((songs) => {
                if (ele.label === "All") {
                  return songs.genre.label;
                }
                return songs.genre.label === ele.label;
              })}
              renderCards={(ele) => <Card data={ele} />}
            />
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}

export default SongsbyGenere;
