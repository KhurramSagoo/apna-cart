import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container
      style={{
        minHeight: "77vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "800px",
        flexDirection: "column",
        color: "white",
      }}
    >
      <Typography variant="h1" textAlign="center">
        About Us
      </Typography>
      <Typography variant="h5" textAlign="center">
        Welcome to our online store! At ApnaCart, we offer a curated selection
        of high-quality products, ranging from stylish clothing to cutting-edge
        electronics and exquisite jewelry. Explore our collection, handpicked to
        meet your diverse needs. Here are some featured products to give you a
        glimpse of what we offer: ApnaCart is committed to providing you with a
        seamless shopping experience. Whether you're looking for fashion-forward
        clothing or cutting-edge electronics, we've got you covered. Thank you
        for choosing ApnaCart. Happy shopping!
      </Typography>
    </Container>
  );
};

export default About;
