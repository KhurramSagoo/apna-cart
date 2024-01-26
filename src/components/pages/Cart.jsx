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
  const price = useSelector((state) => state.cart.price);
  const total = useSelector((state) => state.cart.total);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    dispatch(calculateTotals());
  };

  const handleIncrease = (item) => {
    dispatch(increase({ id: item.id }));
    dispatch(calculateTotals());
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
        Cart Page
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
              <Typography>${item.price}</Typography>
              <Typography>Quantity: {item.amount}</Typography>
              <Button
                onClick={() => handleIncrease(item)}
                style={{
                  // width: "15px",
                  backgroundColor: blueGrey[500],
                  color: "white",
                  margin: "10px",
                }}
              >
                +
              </Button>
              <Button
                onClick={() => handleDecrease(item)}
                style={{
                  // width: "15px",
                  backgroundColor: blueGrey[500],
                  color: "white",
                  margin: "10px",
                }}
              >
                -
              </Button>
              <Button
                onClick={() => handleRemoveItem(item.id)}
                style={{
                  // width: "15px",
                  backgroundColor: blueGrey[500],
                  color: "white",
                  margin: "10px",
                }}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}

      {cartItems.length > 0 && (
        <div>
          <Typography variant="h6">Total Items: {price}</Typography>
          <Typography variant="h6">Total Price: ${total}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </div>
      )}

      <div>
        {cartItems.map((item) => {
          console.log(item);
          return <SingleCartItem key={item.id} item={item} />;
        })}
      </div>
    </Container>
  );
};

export default Cart;
