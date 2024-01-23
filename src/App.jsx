import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { cyan } from "@mui/material/colors";
import NavBarMain from "./NavBarMain";
import Resturant from "./components/resturant/Resturant";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import AddProduct from "./components/pages/AddProduct";

const App = () => {
  return (
    <Router>
      <Container maxWidth="xl" style={{ backgroundColor: cyan[100] }}>
        <Box
          sx={{
            bgcolor: cyan[100],
            border: "none",
            width: "100%",
            paddingTop: "20px",
            marginTop: "0",
            maxHeight: "auto",
          }}
        >
          <NavBarMain />
          <Routes>
            <Route path="/" element={<Resturant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/add_product" element={<AddProduct />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
