import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc , updateDoc } from "firebase/firestore";

const MovieSaved = ({ movies,item }) => {
  const [display, setDisplay] = useState("none");
  const { user } = UserAuth();


  
  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedId) => {

        try{

            const result = movies.filter((item)=>item.id!==passedId);
            
          await updateDoc(movieRef,{

            savedShows: result
          })

        }catch(err){

            console.log(err);
        }
  };

  return (
    <Stack
      key={item.id}
      onMouseOver={() => setDisplay("block")}
      onMouseOut={() => setDisplay("none")}
      p={1}
      sx={{
        position: "relative",
        width: { xs: "160px", sm: "200px", md: "240px", lg: "280px" },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
        alt={item?.title}
      />

      {/* Hover */}
      <Box
        display={display}
        id={item.id}
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
          onClick={() => deleteShow(item.id)}
          sx={{
            position: "absolute",
            top: { xs: "8%", sm: "6%" },
            right: { xs: "6%", sm: "5%" },
            fontSize: { xs: "20px", sm: "30px" },
          }}
        >
          <Close />
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

export default MovieSaved;
