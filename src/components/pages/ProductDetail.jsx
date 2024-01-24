import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";
import Btn from "../utils/Btn";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { mediaType, id } = params;
  const [productDetail, setProductDetail] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  const { title, price, description, category, image, rating } = productDetail;

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);

      try {
        const decodedMediaType = decodeURIComponent(mediaType);
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductDetail(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [id, mediaType]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Grid
        container
        style={{
          minHeight: "77vh",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <div>
            <img
              src={image}
              alt=""
              style={{
                width: "250px",
                height: "250px",
                objectFit: "contain",
              }}
            />
          </div>
        </Grid>

        {/* 2nd grid */}
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Item className="">
            <Typography>{description}</Typography>
            <Typography>
              <strong>Category:</strong> {category}
            </Typography>
            <Typography>
              <strong>Price:</strong> ${price}
            </Typography>
            <Typography>
              <strong>Rating:</strong> {rating.rate}
            </Typography>
            <Typography>
              <strong>Vote:</strong> {rating.count}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Btn name="Buy Now" bgColor="#2abbe8" />

              <Btn name="Add to Cart" bgColor="#f57224" />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
