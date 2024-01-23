import React from "react";
import { Container, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
// import NavBarMain from "./NavBarMain";

const Cart = () => {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: cyan[100] }}>
      <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
        Cart Page
      </Typography>
      {/* Add your cart-related components/content here */}
    </Container>
  );
};

export default Cart;
