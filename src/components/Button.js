import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#2a356b",
        padding: "3% 7% 3% 7%",
      }}
      variant="contained"
    >
      Get Started
    </Button>
  );
}
