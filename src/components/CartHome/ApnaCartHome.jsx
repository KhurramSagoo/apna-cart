import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./style.css";
import { Button, Container, Stack, Typography, colors } from "@mui/material";
import { blueGrey, cyan, teal } from "@mui/material/colors";
import Navbar from "./Navbar";
import NavBarMain from "../../NavBarMain";
import axios from "axios";
import { ShimmerThumbnail } from "react-shimmer-effects";

const ApnaCartHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState(false);
  const [netError, setNetError] = useState(false);
  const [errNetMessage, setErrNetMessage] = useState("");
  const [success, setSuccess] = useState([]);
  const [btnData, setBtnData] = useState([]);
  const [btnList, setBtnList] = useState([]);
  const [btnCategory, setBtnCategory] = useState([]);

  const [newCat, setNewCat] = useState([]);
  // console.log(newCat);

  const getProducts = async () => {
    setIsLoading(true);
    setTextLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      const data = res.data;
      setSuccess(data);
      setBtnList([...new Set(data.map((item) => item.category)), "All"]);
      setBtnData(data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setNetError(true);
      setErrNetMessage(error);
    }

    setTimeout(() => {
      setNetError(false);
      setIsLoading(false);
    }, 1000);
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
    <Container
      style={{
        minHeight: "65vh",
      }}
    >
      <br />

      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-start"
        justifyContent="flex-start"
        // bgcolor={teal.}
        // style={{
        // }}
      >
        <Navbar filterItem={filterItem} btnList={btnList} />
      </Stack>
      {netError && (
        <div>
          <h1
            style={{
              height: "100vh",
              textAlign: "center",
              backgroundColor: blueGrey[700],
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {errNetMessage}
          </h1>
        </div>
      )}

      {/* {isLoading && (
        <div
          style={{
            // height: "61dvh",
            textAlign: "center",
            backgroundColor: blueGrey[700],
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              // height: "100vh",
              textAlign: "center",
              backgroundColor: blueGrey[700],
              color: "white",
            }}
          >
            Loading...Please wait
          </h1>
        </div>
      )} */}

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
          <ProductCard product={product} key={product.id} loading={isLoading} />
        ))}
      </div>
    </Container>
  );
};

export default ApnaCartHome;
