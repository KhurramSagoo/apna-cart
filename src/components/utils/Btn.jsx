import { Button } from "@mui/material";
import React from "react";

const Btn = ({ name, bgColor, onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: bgColor,
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;
