import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./style.css";
import { Button, Container, Stack, Typography, colors } from "@mui/material";
import { cyan } from "@mui/material/colors";
// import data from "./recepieApi";
import Navbar from "./Navbar";
import NavBarMain from "../../NavBarMain";
import axios from "axios";

const Resturant = () => {
  const [success, setSuccess] = useState([]);
  const [btnData, setBtnData] = useState([]);
  const [btnList, setBtnList] = useState([]);
  const [btnCategory, setBtnCategory] = useState([]);

  const [newCat, setNewCat] = useState([]);
  // console.log(newCat);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      // const cate = (
      // await axios.get("https://fakestoreapi.com/products/categories")
      // ).data;

      // setNewCat(cate);
      // console.log(cate);

      const data = res.data;
      setSuccess(data);
      setBtnList([...new Set(data.map((item) => item.category)), "All"]);
      setBtnData(data); // Initialize btnData with all items initially
    } catch (error) {
      console.log(error);
    }
  };

  const filterItem = (category) => {
    if (category === "All") {
      setBtnData(success); // Show all items when "All" is selected
    } else {
      const updatedList = success.filter((item) => item.category === category);
      setBtnData(updatedList);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // const uniqueList = [
  //   ...new Set(
  //     success.map((curElem) => {
  //       return curElem.category;
  //     })
  //   ),
  //   "All",
  // ];

  // console.log(btnData);

  // const filterItem = (category) => {
  //   if (category === "All") {
  //     return setBtnData(success);
  //   }
  //   const updatedList = success.filter((curElem) => {
  //     console.log(curElem);
  //     return curElem.category === category;
  //   });
  //   setRecipeData(updatedList);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  // console.log(uniqueList);

  return (
    <>
      {/* <NavBarMain /> */}
      <br />
      {/* <Typography
        style={{
          fontWeight: "bold",
        }}
      >
        Categories:
      </Typography> */}
      <Stack
        direction="row"
        // spacing={2}
        alignItems="center"
        justifyContent="center"
        // className="nav-div"
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
          <RecipeCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Resturant;
