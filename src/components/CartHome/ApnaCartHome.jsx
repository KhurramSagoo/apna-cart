import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./style.css";
import { Button, Container, Stack, Typography, colors } from "@mui/material";
import { cyan } from "@mui/material/colors";
import Navbar from "./Navbar";
import NavBarMain from "../../NavBarMain";
import axios from "axios";

const ApnaCartHome = () => {
  const [success, setSuccess] = useState([]);
  const [btnData, setBtnData] = useState([]);
  const [btnList, setBtnList] = useState([]);
  const [btnCategory, setBtnCategory] = useState([]);

  const [newCat, setNewCat] = useState([]);
  // console.log(newCat);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      const data = res.data;
      setSuccess(data);
      setBtnList([...new Set(data.map((item) => item.category)), "All"]);
      setBtnData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterItem = (category) => {
    if (category === "All") {
      setBtnData(success);
    } else {
      const updatedList = success.filter((item) => item.category === category);
      setBtnData(updatedList);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <br />

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Navbar filterItem={filterItem} btnList={btnList} />
      </Stack>

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {btnData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ApnaCartHome;
