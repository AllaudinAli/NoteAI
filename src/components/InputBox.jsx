import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const InputBox = ({ onAddLink, link, setLink }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={12} md={6}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Add YouTube Link or URL"
            variant="outlined"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            InputLabelProps={{
              style: { color: "#fff" }, // Changes label text to white
            }}
            InputProps={{
              style: { color: "#fff" }, // Changes input text to white
            }}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default InputBox;
