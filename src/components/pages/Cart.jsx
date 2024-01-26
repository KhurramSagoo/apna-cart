import { Container, Typography, Button, List, ListItem } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} from "../../features/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount = useSelector((state) => state.cart.amount);
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
    <Container maxWidth="xl" style={{ backgroundColor: cyan[100] }}>
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
              <Button onClick={() => handleIncrease(item)}>+</Button>
              <Button onClick={() => handleDecrease(item)}>-</Button>
              <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      )}

      {cartItems.length > 0 && (
        <div>
          <Typography variant="h6">Total Items: {amount}</Typography>
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
    </Container>
  );
};

export default Cart;
