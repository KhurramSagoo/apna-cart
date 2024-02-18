import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { blueGrey, cyan, grey, orange, red, teal } from "@mui/material/colors";
import NavBarMain from "./NavBarMain";
import ApnaCartHome from "./components/CartHome/ApnaCartHome";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import AddNewProduct from "./components/pages/AddNewProduct";
import ProductDetail from "./components/pages/ProductDetail";
import Footer from "./components/CartHome/Footer";

const App = () => {
  return (
    <Router>
      <Container
        maxWidth="xl"
        style={{ backgroundColor: blueGrey[900], minHeight: "95vh" }}
      >
        <Box
          sx={{
            // bgcolor: teal[100],
            border: "none",
            width: "100%",
            paddingTop: "20px",
            marginTop: "0",
            maxHeight: "auto",
          }}
        >
          <NavBarMain />
          <Routes>
            <Route path="/" element={<ApnaCartHome />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/add_product" element={<AddNewProduct />} />
            <Route path="/:mediaType/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Box>
      </Container>
    </Router>
  );
};

export default App;
