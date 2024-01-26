import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Btn = ({ name, bgColor, handle }) => {
  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: bgColor,
        }}
        onClick={handle}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;
