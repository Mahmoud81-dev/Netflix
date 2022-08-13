import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./movie";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  const [display, setDisplay] = useState("none");

  const sliderLeft = () => {
    let slider = document.getElementById("slider" + rowId);

    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider" + rowId);

    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data: Movies } = await axios.get(fetchUrl);

        setMovies(Movies.results);
      } catch (ex) {}
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <Box
      fontWeight={600}
      sx={{
        color: "white",
        fontSize: { xs: "18px", lg: "25px" },
        padding: { xs: "10px", sm: "40px" },
        marginTop:{xs:"25px",sm:"0"}
      }}
    >
      <Typography variant="h5" mt={1} ml={1}
      sx={{
        textAlign:{xs:"center",sm:"start"}
      }}
      >
        {title}
      </Typography>

      {/* slider */}
      <Stack
        onMouseOver={() => setDisplay("block")}
        onMouseOut={() => setDisplay("none")}
        sx={{
          position: "relative",

          width: { xs: "95%", sm: "100%" },
          marginLeft: { xs: "10px", sm: "0" },
          
        }}
      >
        <Stack
          direction="row"
          gap={2}
          mt={2}
          className="scroll"
          id={"slider" + rowId}
        >
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}

        </Stack>

        {/* Arrow */}
        <Box display={display}>
          <ChevronRight
            
            className="hover"
            onClick={sliderRight}
            sx={{
              right: "0",
              display: { xs: "none", sm: "block" },
            }}
          />

          <ChevronLeft
            
            className="hover"
            onClick={sliderLeft}
            sx={{
              display: { xs: "none", sm: "block" },
              left: "0",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Row;
