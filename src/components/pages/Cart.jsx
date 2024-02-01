import { Container, Typography, Button, List, ListItem } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "../../features/CartSlice";
import SingleCartItem from "./SingleCartItem";

const Cart = () => {
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
  };
  const handleBuy = () => {
    dispatch(clearCart());

    alert("Thank you for shopping!");
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    dispatch(calculateTotals());
  };

  const handleIncrease = (item) => {
    dispatch(increase({ id: item.id }));
  };

  const handleDecrease = (item) => {
    if (item.amount === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decrease({ id: item.id }));
    }
    dispatch(calculateTotals());
  };

  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: blueGrey[900], color: "white" }}
    >
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
            <Button
              variant="contained"
              onClick={handleBuy}
              style={{
                margin: "5px 10px",
              }}
            >
              Buy Now
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClearCart}
              style={{
                margin: "5px 10px",
              }}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
