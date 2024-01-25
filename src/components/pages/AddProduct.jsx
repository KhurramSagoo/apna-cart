import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { blueGrey } from "@mui/material/colors";
import Btn from "../utils/Btn";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "This is shouldn't be empty!";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const AddProduct = () => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
  });
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const handleSnackbarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // const [open, setOpen] = React.useState(false);
  // const [er, setEr] = useState("");
  const [newProductData, setNewProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const addNewProduct = async (state) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProductData
      );
      setSnackbarState({
        open: true,
        message: "New Product Added Successfully!",
      });

      console.log("New Product Added:", response.data);
    } catch (error) {
      // Update the snackbar state to show an error message
      setSnackbarState({
        open: true,
        message: "Error adding new product. Please try again.",
      });
      console.error("Error adding new product:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          color: "white",
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            width: "100%",
            height: "86vh",
            display: "grid",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>Add Product</h2>
          <div>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              // value={newProductData.title}
              // size=""
              onChange={handleInputChange}
              size="small"
            />
            {/* <input
            type="text"
            name="title"
            value={newProductData.title}
            onChange={handleInputChange}
          /> */}
          </div>
          <div>
            {/* <label>Price:</label> */}
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
              // value={newProductData.price}
              // value={newProductData.price}
              // onChange={handleInputChange}
              size="small"
              // style={{
              //   color: "white",
              // }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}

              // size=""
            />
            {/* <input
            type="number"
            name="price"
            value={newProductData.price}
            onChange={handleInputChange}
          /> */}
          </div>
          <div>
            {/* <label>Description:</label> */}
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              // rows={4}
              defaultValue="Write in detail about product"
              // value={newProductData.description}
              // onChange={handleInputChange}
              // size="small"
            />
            {/* <textarea
            name="description"
            value={newProductData.description}
            onChange={handleInputChange}
          /> */}
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <br />
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={newProductData.category}
                onChange={handleInputChange}
                size="small"
                fullWidth
              >
                <MenuItem value="men's clothing">Men's Clothing</MenuItem>
                <MenuItem value="jewelry">Jewelry</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="women's clothing">Women's Clothing</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            {/* <label>Image URL:</label> */}
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              // value={newProductData.title}
              // size=""
              onChange={handleInputChange}
              size="small"
            />
          </div>
          <div>
            {/* <label>Rating Rate:</label> */}
            <TextField
              id="outlined-basic"
              label="Rating Rate"
              variant="outlined"
              type="number"
              size="small"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Rating Count"
              variant="outlined"
              type="number"
              size="small"
            />
          </div>
          {/* <Button
            onClick={addNewProduct}
            variant="contained"
            style={{
              backgroundColor: blueGrey[600],
              "&:hover": {
              
              },
            }}
          >
            Add New Product
          </Button> */}
          {/* onClick={addNewProduct} */}
          <Btn
            bgColor={blueGrey[700]}
            name="Add Product"
            onClick={addNewProduct}
          />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackbarState.open}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              severity={
                snackbarState.message.includes("Error") ? "error" : "success"
              }
            >
              {snackbarState.message}
            </MuiAlert>
          </Snackbar>
        </div>
      </Box>
    </Container>
  );
};

export default AddProduct;
