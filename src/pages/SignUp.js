import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { signUp, register } = UserAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      register(email);

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Box position="relative">
      <Box
      
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "99.5vh",
            display: { xs: "none", sm: "block" },
          }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/671ff16a-4e7d-44b0-a2ea-fb81487cc987/EG-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-img"
        />
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7) 600px)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "1",
        }}
      ></Box>

      {/* cardSignUp */}
      <Stack
     
     p={4}
     sx={{
       position: "fixed",
       top: { xs: "43%", sm: "54%" },
       left: "50%",
       transform: "translate(-50%,-50%)",
       zIndex: "30",
       background: "linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7) )",
       width: { xs: "100%", sm: "350px", md: "450px" },
       height: "560px",
     }}
   >
     <Typography
       fontWeight={600}
       sx={{
         color: "white",
         fontSize: { xs: "45px", sm: "40px" },
         marginTop: {xs:"100px",sm:"30px"},
         marginLeft: { xs: "20px", sm: "3px" },
       }}
     >
       Sign Up
     </Typography>

     <Box
       sx={{
         marginLeft: { xs: "20px", sm: "0" },
         width: { xs: "80%", sm: "95%" },
       }}
     >
       <form onSubmit={handelSubmit}>
         <input
           required
           onChange={(e) => setEmail(e.target.value)}
           className="input"
           placeholder="Email"
           id="email"
           type="email"
         />
         <input
           onChange={(e) => setPassword(e.target.value)}
           required
           className="input"
           placeholder="Password"
           id="password"
           type="password"
         />
         <Button
           type="submit"
           sx={{
             marginTop: "50px",
             fontSize: { xs: "15px", sm: "19px" },
             width: "105%",
             padding: { xs: "10px 0", sm: "12px 0px" },
             marginLeft: { xs: "3px", sm: "0" },
           }}
           color="error"
           variant="contained"
         >
           Sign Up
         </Button>

         <Stack
           sx={{}}
           width="105%"
           direction="row"
           justifyContent="space-between"
           alignItems="center"
           mt={4}
         >
           <Stack
             direction="row"
             justifyContent="center"
             color="white"
             gap={1}
           >
             <input type="checkbox" />
             <Typography
               sx={{
                 opacity: "0.5",
                 fontSize: "14px",
               }}
             >
               Remember me
             </Typography>
           </Stack>

           <Typography
             sx={{
               opacity: "0.5",
               fontSize: "14px",
             }}
             color="white"
           >
             Need Help?
           </Typography>
         </Stack>

         <Typography
           sx={{
             fontSize: { xs: "15px", sm: "18px" },
           }}
           mt={4}
           color="white"
         >
           <span color="white" className="span">
             Already subscribe to Netflix?{" "}
           </span>
           <Link to="/login" className="text text-color">
             Sign In.
           </Link>
         </Typography>
       </form>
     </Box>
   </Stack>
     
    </Box>
  );
};

export default SignUp;
