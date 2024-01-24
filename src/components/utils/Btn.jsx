import { Button } from "@mui/material";
import React from "react";

const Btn = ({ name, bgColor }) => {
  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;
