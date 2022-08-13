import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();
  const handelLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
      sx={{
        position: "absolute",
        zIndex: "100",
        width: "100%",
      }}
    >
      <Link to="/" className="text">
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { xs: "25px", sm: "28px", lg: "40px" },
            color: "red",
            cursor: "pointer",
            marginLeft: {xs:"10px",sm:"15px",md:"25px"},
          }}
        >
          NETFLIX
        </Typography>
      </Link>

      {user?.email ? (
        <Box mr="20px">
          <Link to="/account" className="text">
            <Button
              sx={{
                color: "white",
                marginRight: "15px",
                fontSize: { xs: "10px", sm: "15px" },
              }}
            >
              Account
            </Button>
          </Link>

          <Button
          onClick={handelLogOut}
            sx={{
              fontSize: { xs: "10px", sm: "15px" },
              marginRight: { xs: "0px" },
            }}
            variant="contained"
            color="error"
          >
            Log Out
          </Button>
        </Box>
      ) : (
        // Or

        <Box mr="20px">
          <Link to="/login" className="text">
            <Button
              sx={{
                color: "white",
                marginRight: "15px",
                fontSize: { xs: "10px", sm: "15px" },
              }}
            >
              Sign In
            </Button>
          </Link>

          <Link to="signup" className="text">
            <Button
              sx={{
                fontSize: { xs: "10px", sm: "15px" },
                marginRight: { xs: "0px" },
              }}
              variant="contained"
              color="error"
            >
              Sign up
            </Button>
          </Link>
        </Box>
      )}
    </Stack>
  );
};

export default Navbar;
