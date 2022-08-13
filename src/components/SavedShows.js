import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import MovieSaved from "./movieSaved";

const SavedShows = () => {
  const [display, setDisplay] = useState("none");
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    const getData = () => {
      try {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShows);
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [user?.email]);

  const sliderLeft = () => {
    let slider = document.getElementById("slider");

    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider");

    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      {movies.length === 0 ? (
        <Typography
       
        mt={15}
        fontWeight={600}
        sx={{
          width:"100%",
          textAlign:"center",
          fontSize:{xs:"15px",sm:"25px"},
          
        }}
        >There are no Shows saved..!</Typography>
      ) : (
        <Box
          fontWeight={600}
          sx={{
            color: "white",
            fontSize: { xs: "18px", lg: "25px" },
            padding: { xs: "10px", sm: "40px" },
            marginTop: { xs: "25px", sm: "0" },
          }}
        >
          <Typography
            variant="h5"
            mt={1}
            ml={1}
            sx={{
              textAlign: { xs: "center", sm: "start" },
              color: "gray",
            }}
          >
            My Shows
          </Typography>

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
              id={"slider"}
            >
              {movies.map((item) => (
                <MovieSaved key={item.id} movies={movies} item={item} />
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
      )}
    </>
  );
};

export default SavedShows;
