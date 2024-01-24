import React from "react";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: teal[400],
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "cyan[900]",
        }}
      >
        <Typography variant="body1">© 2024 Khurram</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <IconButton color="inherit" href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
