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
import {
  ShimmerThumbnail,
  ShimmerSimpleGallery,
  ShimmerPostList,
  ShimmerPostItem,
  ShimmerButton,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
  ShimmerBadge,
  ShimmerTableCol,
  ShimmerTableRow,
} from "react-shimmer-effects";

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
  const navigate = useNavigate();
  const { id, title, price, description, category, image, rating } = product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [expanded, setExpanded] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              width: "250px",
              // minHeight: "30px",
              // paddingTop: "10px",
              // height: "250px",
              margin: "5px 10px",
              // marginBottom: "10px",
              // paddingTop: "10px",
            }}
          >
            <ShimmerThumbnail
              width={150}
              height={200}
              className="m-1"
              rounded
              center="true"
            />
            {/* <ShimmerTitle /> */}
            {/* <ShimmerText /> */}
            <ShimmerText line={5} gap={10} className="shimmer-text" />
            {/* <ShimmerText line={2} gap={10} className="" /> */}
          </div>
        </>
      ) : (
        <Card
          className="product-div"
          sx={{
            // maxWidth: "250px",
            width: "250px",
            bgcolor: blueGrey[700],
            minHeight: "300px",
            paddingTop: "10px",
            cursor: "pointer",
          }}
          style={{
            margin: "5px",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
          }}
          onClick={() => navigate(`/${category}/${id}`)}
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
            alt="Paella dish"
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
          </CardContent>
        </Card>
      )}
    </>
  );
}
