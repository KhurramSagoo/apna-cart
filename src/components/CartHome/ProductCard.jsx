import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, blueGrey, cyan, red, teal } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  // console.log(product);
  //   id: 1,
  //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   price: 109.95,
  //   description:
  //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //   category: 'men\'s clothing',
  //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   rating: { rate: 3.9, count: 120 }
  // },
  // const { id, title, image, category, description, price, rating } = [
  //   ...product,
  // ];
  const { id, title, price, description, category, image, rating } = product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(recipe);
  const [expanded, setExpanded] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 250,
    bgcolor: "background.paper",
    // border: "1.5px solid #000",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
    bgcolor: teal[50],
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        className="product-div"
        sx={{ maxWidth: 200, bgcolor: blueGrey[700], minHeight: "450px" }}
        style={{
          // minHeight: "400px",
          padding: "10px",
          margin: "8px",
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
        onClick={() => navigate(`/${category}/${id}`)}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: blueGrey[300],
              }}
              aria-label="recipe"
            >
              {/* {recipe.category.charAt(0)} */}
              {id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={category.toUpperCase()}
          style={{
            fontWeight: "bold",
          }}
          // subheader={recipe.label}
        />
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
        <CardContent>
          <Typography
            style={{
              fontWeight: "500",
              color: "white",
            }}
          >
            {title.slice(0, 38)}
          </Typography>
          <Typography variant="body2" color="white">
            {/* {description.slice(0, 220)} */}
          </Typography>
          <Typography variant="body2" color="white">
            <strong>Price: {""}</strong>
            {price}
            {""} $
          </Typography>
        </CardContent>

        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon
              style={{
                color: "white",
              }}
            />
          </IconButton>
          {/* <Button variant="outline" onClick={handleOpen}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              More info
              <InfoIcon
                style={{
                  color: "white",
                }}
              />{" "}
            </Typography>
          </Button> */}

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                src={image}
                alt=""
                style={{
                  width: "90%",
                  height: "auto",
                  maxHeight: "250px",
                  objectFit: "contain",
                }}
              />
              {/* <Typography paragraph>Ingredients:</Typography> */}
          {/* <Typography paragraph key={id}>
                {product.map((element, id) => (
                  <ul key={id}>
                    <li>{element}</li>
                  </ul>
                ))}
              </Typography> */}
          {/* <Typography> */}
          {/* {description} */}
          {/* {description.slice(0, 220)} */}
          {/* </Typography> */}
          {/* <Button
                variant="outlined"
                onClick={handleClose}
                style={{
                  color: "grey",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginLeft: "auto",
                }}
              >
                Close
                <CloseIcon />
              </Button> */}
          {/* </Box> */}
          {/* </Modal> */}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </>
  );
}
