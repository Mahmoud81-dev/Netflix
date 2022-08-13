import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  //to get movie random in every time refresh

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data: Movies } = await axios.get(requests.requestPopular);

        setMovies(Movies.results);
      } catch (ex) {}
    };

    getMovies();
  }, []);

  // console.log(movie);

  const truncatString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <Box>
      {/* OverLayout */}
      <Box
        sx={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.2) 600px), linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0) 700px)",
          width: "100%",
          position: "absolute",
          zIndex: "1",
          height: "550px",
        }}
      ></Box>
      {/* end over layout */}

      <img
        className="image-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      <Box
        sx={{
          position: "absolute",
          zIndex: "3",
          top: {xs:"15%",md:"25%"},
          left: "2%",
        }}
      >
        <Typography
          fontWeight={600}
          sx={{
            color: "white",
            width:{xs:"100%",md:"30%"},
            fontSize: { lg: "35px", sm: "20px",xs:"15px" },
          }}
        >
          {movie?.title}
        </Typography>

        {/* Buttons */}
        <Stack direction="row"  alignItems="center" my={4}
        sx={{

          gap:{xs:"20px",sm:"30px"}
        }}
        >
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "white",
              padding: { lg: "8px 30px", sm: "8px 25px", xs:"6px 15px"},
              "&:hover": {
                backgroundColor: "#F1EEE9",
              },
            }}
          >
            Play
          </Button>
          <Button
            variant="text"
            sx={{
              color: "white",
              border: "1px solid white",
              padding: { lg: "8px 45px", sm: "8px 40px" },
            }}
          >
            Watch
          </Button>
        </Stack>
        

        <Typography
          sx={{
            color: "#CFD2CF",
            fontSize: { xs: "12px", lg: "15px", xl: "17x" },
          }}
        >
          Released: {movie?.release_date}
        </Typography>

        <Typography
          sx={{
            color: "#DDDDDD",
            fontSize: { xs: "15px", md: "18px", lg: "22px" },
            width: {xs:"90%", md: "70%", lg: "50%", xl: "40%" },
          }}
        >
          {truncatString(movie?.overview, 150)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
