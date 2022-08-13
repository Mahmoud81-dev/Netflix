import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [display, setDisplay] = useState("none");
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      toast.error("please login first to save a movie");
    }
  };

  return (
    
    <Stack
      onMouseOver={() => setDisplay("block")}
      onMouseOut={() => setDisplay("none")}
      p={1}
      sx={{
        position: "relative",
        width: { xs: "160px", sm: "200px", md: "240px", lg: "280px" },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      {/* Hover */}
      <Box
        display={display}
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8))",
        }}
      >
        <Box
        onClick={saveShow}
          sx={{
            position: "absolute",
            top: { xs: "8%", sm: "6%" },
            left: { xs: "6%", sm: "5%" },
            fontSize: { xs: "20px", sm: "30px" },
          }}
        >
          {like ? (
            <Favorite
            color="error"
             
            />
          ) : (
            <FavoriteBorder />
          )}
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: { xs: "15px", sm: "20px" },
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Movie;
