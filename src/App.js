import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/logIn";
import Account from "./pages/Account";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRouter from "./components/ProtectedRouter";
import Footer from "./components/footer";

function App() {
  return (
    <Box>
      <Box
        sx={{
         width:{xs:"20%",sm:"100%"}
        }}
      >
        <ToastContainer position="top-center" autoClose={4000} />
      </Box>
      <AuthContextProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />

          <Route
            path="/account"
            element={
              <ProtectedRouter>      
                <Account />
              </ProtectedRouter>
            }
          />
        </Routes>
        
      </AuthContextProvider>
    </Box>
  );
}

export default App;
