import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Reviews } from "@mui/icons-material";

const Navbar = ({ filterItem, btnList }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{
          bgcolor: cyan[100],
          color: cyan[900],
          border: "none",
          fontWeight: "bolder",
          // "&:hover": {
          //   bgcolor: cyan[900],
          //   color: cyan[200],
          //   border: "none",
          // },
        }}
      >
        Categories are following:{""}
      </Typography>

      {btnList.map((curElem) => {
        return (
          <>
            <Button
              className="nav-btn"
              variant="outlined"
              onClick={() => filterItem(curElem)}
              sx={{
                bgcolor: cyan[100],
                color: cyan[900],
                border: "none",
                "&:hover": {
                  bgcolor: cyan[900],
                  color: cyan[200],
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
  );
};

export default Navbar;
