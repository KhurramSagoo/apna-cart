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
import { toast } from "react-toastify";
// import Skeleton from "../skeleton/Skeleton";

import { addToCart } from "../../features/CartSlice";
import { ShimmerText } from "react-shimmer-effects";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetail = () => {
  const { total } = useSelector((state) => state.cart);
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
        // const decodedMediaType = decodeURIComponent(mediaType);
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProductDetail(data);
        // console.log(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
      setLoading(false);
    };

    fetchProductDetail();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            {loading ? (
              <ShimmerText line={5} gap={10} />
            ) : (
              <Typography color="white">{description}</Typography>
            )}
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
              <FavoriteIcon className="card--icon" />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon className="card--icon" />
            </IconButton>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ margin: "0 10px" }}>
                <Btn
                  name="Buy Now"
                  bgColor="#2abbe8"
                  handle={() => {
                    toast.info("Buy from Cart");
                  }}
                />
              </div>

              <div
                style={{
                  margin: "0 10px",
                }}
              >
                <Btn
                  name="Add to Cart"
                  bgColor="#f57224"
                  handle={() => {
                    dispatch(addToCart(productDetail));
                    toast.success("Add to Cart ");
                    // setTimeout(() => {
                    //   if (total === 0) {
                    //     toast.warn(`Your current amount in total is ${price}$`);
                    //   } else {
                    //     toast.warn(`Your current amount in total is ${total}$`);
                    //   }
                    // }, 500);
                  }}
                />
              </div>
              <Btn
                name="Navigate To Cart"
                bgColor="#f57224"
                handle={() => {
                  navigate("/cart");
                  dispatch(addToCart(productDetail));
                  toast.success("Add to Cart ");
                  // setTimeout(() => {
                  //   if (total === 0) {
                  //     toast.warn(`Your current amount in total is ${price}$`);
                  //   } else {
                  //     toast.warn(`Your current amount in total is ${total}$`);
                  //   }
                  // }, 500);
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
