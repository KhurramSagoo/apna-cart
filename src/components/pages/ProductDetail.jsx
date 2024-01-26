import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Btn from "../utils/Btn";
import StarRating from "../utils/StarRating";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addToCart,
} from "../../features/CartSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetail = () => {
  const selector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

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

  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" onClick={() => navigate("/")}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="white" onClick={() => navigate("/")}>
      Prodcuts
    </Link>,
    <Typography key="3" color={blueGrey[50]}>
      {title}
    </Typography>,
  ];

  return (
    <Container>
      <br />
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
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
            color: "white",
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <div>
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "400px",
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
          <Item
            className=""
            style={{
              backgroundColor: blueGrey[900],
            }}
          >
            <Typography color="white">{description}</Typography>
            <Typography color="white">
              <strong>Category:</strong> {category}
            </Typography>
            <Typography color="white">
              <strong>Price:</strong> ${price}
            </Typography>
            <Typography color="white">
              <strong>Rating:</strong>{" "}
              <StarRating rate={rating.rate} bgColor="#f57224" />
            </Typography>
            <Typography color="white">
              <strong>Rating:</strong> {rating.rate}
            </Typography>
            <Typography color="white">
              <strong>Vote:</strong> {rating.count}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                className="card--icon"
                style={
                  {
                    // color: "white",
                  }
                }
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon
                className="card--icon"
                style={
                  {
                    // color: "white",
                  }
                }
              />
            </IconButton>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Btn
                name="Buy Now"
                bgColor="#2abbe8"
                handle={() => {
                  alert("buy");
                }}
              />

              <Btn
                name="Add to Cart"
                bgColor="#f57224"
                handle={() => {
                  dispatch(addToCart(productDetail));
                  alert("Product added to cart");
                }}
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
