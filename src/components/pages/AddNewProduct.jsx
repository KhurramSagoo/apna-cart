import { useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddBtn from "../utils/Btn";
import { useForm } from "react-hook-form";
import { addToCart } from "../../features/CartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        id: 21,
        ...data,
      });
      toast.success("New product added successfully!");
      setTimeout(() => {
        toast.info(`Added product title's ${data.title}`);
      }, 1000);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <Grid>
        <Grid item>
          <form onSubmit={handleSubmit()}>
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
                {...register("title", { required: true })}
              />
              {errors.title && <p>Title is required.</p>}

              {/* <p>{errors.root}</p> */}
              <label>Price:</label>
              <input
                type="number"
                name="price"
                placeholder="write the price of product..."
                style={{ width: "300px", padding: "10px" }}
                {...register("price", { required: "true" })}
              />
              {errors.price && <p>Price is required.</p>}

              <label>Description:</label>
              <textarea
                placeholder="write the description of product..."
                style={{ width: "300px", padding: "10px", resize: "none" }}
                {...register("description", { required: "true" })}
              />
              {errors.description && <p>Description is required.</p>}

              <label>Category:</label>
              <select
                style={{ width: "300px", padding: "10px", resize: "none" }}
                {...register("category", { required: "true" })}
              >
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
              {errors.category && <p>Category is required.</p>}

              <label>Image URL:</label>
              <input
                type="text"
                style={{ width: "300px", padding: "10px" }}
                placeholder="write the image URL of product..."
                {...register("url", { required: "true" })}
              />
              {errors.url && <p>Image URL is required.</p>}

              <div
                className="btn-div"
                style={{
                  marginTop: "15px",
                }}
              >
                <AddBtn
                  name={"Add New Product"}
                  bgColor={"#455a64"}
                  handle={handleSubmit(onSubmit)}
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
