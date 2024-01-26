import { removeItem, increase, decrease } from "../../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Btn from "../utils/Btn";
import { blueGrey } from "@mui/material/colors";
import { Button } from "@mui/material";
const SingleCartItem = ({ item }) => {
  const { id, image, title, price, amount } = item;

  const numberOfItems = useSelector((store) => store.cart.cartItems.length);
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
        }}
      >
        {/* <Btn
          handle={() => {
            dispatch(increase({ id }));
          }}
          name="Remove"
          bgColor={blueGrey[]}
        /> */}

        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <KeyboardArrowUpIcon />
          {/* <ChevronUp /> */}
        </button>
        <p className="amount">{amount}</p>
        <p className="amount">{numberOfItems}</p>
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
          <KeyboardArrowDownIcon />
          {/* <ChevronDown /> */}
        </button>
      </div>
    </article>
  );
};
export default SingleCartItem;
