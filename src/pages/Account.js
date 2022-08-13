import { Box, Typography } from "@mui/material";
import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {

  return (
    <Box color="white">
      <Box>
        <img
          style={{
            width: "100%",
            height: "400px",
            display: { xs: "none", sm: "block" },
          }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/671ff16a-4e7d-44b0-a2ea-fb81487cc987/EG-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-img"
        />
        <Box
          sx={{
            background:
              "linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7) 600px)",
            width: "100%",
            height: "400px",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "2%",
            zIndex: "2",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            My Shows
          </Typography>
        </Box>
      </Box>

      <SavedShows/>
    </Box>
  );
};

export default Account;
