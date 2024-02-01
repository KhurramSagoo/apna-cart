import { removeItem, increase, decrease } from "../../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Btn from "../utils/Btn";
import { blueGrey } from "@mui/material/colors";
import { Button } from "@mui/material";
const SingleCartItem = ({ item }) => {
  // console.log(item);
  const { id, image, title, price, amount } = item;
  // console.log(image);
  // const numberOfItems = useSelector((store) => store.cart.cartItems.length);
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img
        src={image}
        alt={title}
        style={{
          width: "100px",
        }}
      />
      <div>
        <p>{title}</p>
        <p className="item-price">${price}</p>
        <Button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </Button>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
        }}
      >
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <KeyboardArrowUpIcon
            style={{
              fontSize: "1rem",
              // padding: "5px 10px",
            }}
          />
          {/* <ChevronUp /> */}
        </button>
        <div
          style={{
            margin: "0 10px",
          }}
        >
          <p className="amount">{amount}</p>
        </div>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <KeyboardArrowDownIcon
            style={{
              fontSize: "1rem",
            }}
          />
        </button>
      </div>
    </article>
  );
};
export default SingleCartItem;
