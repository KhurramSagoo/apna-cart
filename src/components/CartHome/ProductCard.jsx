import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, blueGrey, cyan, red, teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import StarRating from "../utils/StarRating";
import Skeleton from "../skeleton/Skeleton";
import { addToCart } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import Btn from "../utils/Btn";
import { toast } from "react-toastify";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product, loading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, price, description, category, image, rating } = product;
  return (
    <>
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <Card
          className="product-div"
          sx={{
            // maxWidth: "250px",
            width: "275px",
            minHeight: "350px",
            bgcolor: blueGrey[700],
            paddingTop: "10px",
            cursor: "pointer",
          }}
          style={{
            margin: "5px",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            style={{
              width: "100%",
              maxHeight: "200px",
              objectFit: "contain",
              borderRadius: "5px",
            }}
            image={image}
            alt={title}
          />

          <CardContent
            style={{
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: "500",
                color: "white",
                fontSize: "14px",
              }}
            >
              {title.slice(0, 50)}
            </Typography>
            <Typography variant="body2" color="white">
              {/* {description.slice(0, 220)} */}
            </Typography>
            <Typography variant="body2" color="white">
              <strong>Price: {""}</strong>
              {price}
              {""} $
            </Typography>
            <StarRating rate={rating.rate} bgColor="#f57224" />

            <Btn
              name="Detail"
              bgColor="#8aa2ad"
              handle={() => navigate(`/${category}/${id}`)}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
}
