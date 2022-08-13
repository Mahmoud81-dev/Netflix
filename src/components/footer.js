import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box mt="20px">
      <Stack alignItems="center" gap="20px" px="40px" pt="10px">
        <Typography
          variant="h6"
          color="white"
          fontWeight={600}
          sx={{ fontSize: { xs: "13px", sm: "20px" } }}
        >
          Made With ❤️ by Mahmoud Hamdy
        </Typography>

        <Stack
          direction="row"
          mb={3}
          gap="20px"
          sx={{ fontSize: { xs: "10px", lg: "20px" } }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100010258625338"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-hamdy-7a3895195"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Mahmoud81-dev"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <GitHub />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
