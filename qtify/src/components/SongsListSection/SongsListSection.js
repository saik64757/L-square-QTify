import React, { useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "../Pagination.js/Pagination";

// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
let PageSize = 8;

const SongsListSection = ({ songsList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return songsList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, songsList]);
  return (
    <>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={songsList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <TableContainer component={Paper} sx={{ backgroundColor: "inherit" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "26px" }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "26px" }}
              >
                Artist
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "26px" }}
              >
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTableData.map((song, idx) => (
              <TableRow key={idx}>
                <TableCell
                  align="center"
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <img
                    src={song.image}
                    alt={song.title}
                    width={"59px"}
                    height={"64px"}
                    style={{ borderRadius: "12px" }}
                  />
                  {song.title}
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  {song.artists.map((artist) => `🎶${artist}`)}
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  {String(song.durationInMs).slice(0, 1)}:
                  {String(song.durationInMs).slice(1, 3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SongsListSection;
