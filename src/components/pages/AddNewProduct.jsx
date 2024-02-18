import { useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddBtn from "../utils/Btn";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [newProductData, setNewProductData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const addNewProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProductData
      );
      alert("New Product Added Successfully!");
      dispatch(newProductData);

      console.log("New Product Added:", response.data);
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  };

  return (
    <Container>
      <Grid>
        <Grid item>
          <form
            onSubmit={addNewProduct}
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: "column",
              minHeight: "79.5vh",
              width: "100%",
            }}
          >
            <label>Title:</label>
            <input
              type="text"
              style={{ width: "300px", padding: "10px" }}
              placeholder="write the title of product..."
            />
            <label>Price:</label>
            <input
              type="number"
              name="price"
              placeholder="write the price of product..."
              style={{ width: "300px", padding: "10px" }}
            />
            <label>Description:</label>
            <textarea
              placeholder="write the description of product..."
              style={{ width: "300px", padding: "10px", resize: "none" }}
            />
            <label>Category:</label>
            <select style={{ width: "300px", padding: "10px", resize: "none" }}>
              <option>Category</option>
              <option>Men's Clothing</option>
              <option>Jewelery</option>
              <option>Electronics</option>
              <option>Women's Clothing</option>
            </select>
            {/* <input type="text" style={{ width: "300px", padding: "10px" }} /> */}

            <label>Image URL:</label>
            <input type="text" style={{ width: "300px", padding: "10px" }} />
            <label>Rating Rate:</label>
            <input type="number" style={{ width: "300px", padding: "10px" }} />
            <label>Rating Count:</label>
            <input type="number" style={{ width: "300px", padding: "10px" }} />
            <div className="btn-div">
              <AddBtn
                name={"Add New Product"}
                bgColor={"#455a64"}
                handle={addNewProduct}
              />
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNewProduct;
