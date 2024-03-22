import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "../../features/CartSlice";
import SingleCartItem from "./SingleCartItem";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Btn from "../utils/Btn";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const { image, price,amount } = cartItems;
  const { total } = useSelector((state) => state.cart);
  // console.log(total);
  // console.log(cartItems);

  const totalItems = cartItems.reduce((acc, item) => acc + item.amount, 0);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warn("Cart is cleared now!");
  };
  const handleBuy = () => {
    dispatch(clearCart());
    toast.success("Thank you for shopping!");
  };

  // const handleRemoveItem = (itemId) => {
  //   dispatch(removeItem(itemId));
  //   dispatch(calculateTotals());
  // };

  // const handleIncrease = (item) => {
  //   dispatch(increase({ id: item.id }));
  // };

  // const handleDecrease = (item) => {
  //   if (item.amount === 1) {
  //     dispatch(removeItem(item.id));
  //   } else {
  //     dispatch(decrease({ id: item.id }));
  //   }
  //   dispatch(calculateTotals());
  // };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" onClick={() => navigate("/")}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="white" onClick={() => navigate("/")}>
      Prodcuts
    </Link>,
    <Typography key="3" color={blueGrey[50]}>
      {/* {title} */}
    </Typography>,
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: blueGrey[900],
        color: "white",
        minHeight: "76vh",
      }}
    >
      <br />
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
        Your's Cart. Happy Shopping!
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <Typography>{item.title}</Typography>
            </ListItem>
          ))}
        </List>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          flexWrap: "wrap",
          // margin: "10px",
          // padding: "5px",
        }}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // flexWrap: "wrap",
              margin: "10px",
              padding: "5px",
            }}
          >
            <SingleCartItem key={item.id} item={item} />
          </div>
        ))}

        {cartItems.length > 0 && (
          <div>
            <Typography variant="h6">Total Items: {totalItems}</Typography>
            <Typography variant="h6">
              Total Price: ${Math.ceil(total)}
            </Typography>
            {/* <Button
              variant="contained"
              onClick={handleBuy}
              style={{
                margin: "5px 10px",
              }}
            >
              Buy Now
            </Button> */}
            <div
              style={{
                margin: "0 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Btn bgColor="#11a9ad" handle={handleBuy} name="Buy Now" />
            </div>
            <div
              style={{
                margin: "10px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Btn
                bgColor="#11a9ad"
                handle={handleClearCart}
                name="Clear Cart"
              />
            </div>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleClearCart}
            >
              Clear Cart
            </Button> */}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
