import React from "react";
import Main from "../components/Main";
import { Box } from "@mui/system";
import requests from "../Requests";
import Row from "../components/Row";
import Footer from "../components/footer";
const Home = () => {
  return (
    <Box>
      <Main/>
      <Row rowId="1" title={"UpComing"} fetchUrl={requests.requestUpComing} />
      <Row rowId="2" title={"Popular"} fetchUrl={requests.requestPopular} />
      <Row rowId="3" title={"Trending"} fetchUrl={requests.requestTrending} />
      <Row rowId="4" title={"TopRated"} fetchUrl={requests.requestTopRated} />
      <Row rowId="5" title={"Horror"} fetchUrl={requests.requestHorror} />
      <Footer/>
    </Box>
  );
};

export default Home;
