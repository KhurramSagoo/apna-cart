import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Container, Grid, Typography } from "@mui/material";
import { blueGrey, cyan } from "@mui/material/colors";
import { Reviews } from "@mui/icons-material";

const Navbar = ({ filterItem, btnList }) => {
  return (
    <Container>
      <Grid xs={12} key={btnList.id}>
        <Typography
          sx={{
            // bgcolor: cyan[100],
            // color: cyan[900],
            color: "white",
            border: "none",
            fontWeight: "bolder",
            fontfamily: "Montserrat",
            letterSpacing: "2",
          }}
          variant="h5"
          textAlign="center"
        >
          Choose Category:{""}
        </Typography>
      </Grid>
      <div
        key={filterItem.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {btnList.map((curElem) => {
          return (
            <>
              <Button
                className="nav-btn"
                variant="outlined"
                onClick={() => filterItem(curElem)}
                sx={{
                  bgcolor: blueGrey[600],
                  color: "white",
                  border: "none",
                  margin: "5px 10px",
                  "&:hover": {
                    bgcolor: blueGrey[900],
                    // color: cyan[200],
                    border: "none",
                  },
                }}
              >
                {curElem}
              </Button>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default Navbar;
