import React from "react";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { blueGrey, cyan, teal } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: blueGrey[700],
        padding: "10px 0",
        fontFamily: "Montserrat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="white">
          © 2024 Khurram
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <IconButton href="https://www.facebook.com/">
            <FacebookIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          <IconButton href="https://twitter.com/">
            <TwitterIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/">
            <InstagramIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
