import { useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddBtn from "../utils/Btn";
import { useForm } from "react-hook-form";
import { addToCart } from "../../features/CartSlice";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    // dispatch(
    //   addToCart({
    //     id: data.id,
    //     price: data.price,
    //     description: data.description,
    //     category: data.category,
    //     image: data.url,
    //     // Add other product data as needed
    //   })
    // );
  };

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products"
        // newProductData
      );
      // alert("New Product Added Successfully!");
      // dispatch(newProductData);
      // alert(response.statusText);
      console.log("New Product Added:", response.data);
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  };

  return (
    <Container>
      <Grid>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
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
                {...register("title")}
              />
              <p>{errors.root}</p>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                placeholder="write the price of product..."
                style={{ width: "300px", padding: "10px" }}
                {...register("price")}
              />
              <label>Description:</label>
              <textarea
                placeholder="write the description of product..."
                style={{ width: "300px", padding: "10px", resize: "none" }}
                {...register("description")}
              />
              <label>Category:</label>
              <select
                style={{ width: "300px", padding: "10px", resize: "none" }}
                {...register("category")}
              >
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
              {/* <input type="text" style={{ width: "300px", padding: "10px" }} /> */}
              <label>Image URL:</label>
              <input
                type="text"
                style={{ width: "300px", padding: "10px" }}
                placeholder="write the image URL of product..."
                {...register("url")}
              />
              <div
                className="btn-div"
                style={{
                  marginTop: "15px",
                }}
              >
                <AddBtn
                  name={"Add New Product"}
                  bgColor={"#455a64"}
                  handle={handleSubmit(onsubmit)}
                />
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNewProduct;
