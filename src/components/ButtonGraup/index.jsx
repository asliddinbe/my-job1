import { Box, Button } from "@mui/material";
import React from "react";

export default ({ navbutton }) => {
  return (
    <>
      {navbutton && (
        <Box
          sx={{
            mr: "5%",
            width: "25%",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              border: 1,
              width: "45%",
              height: "70%",
              borderRadius: 0,
              color: "white",
              backgroundColor: "#FB246A",
            }}
          >
            Register
          </Button>
          <Button
            sx={{
              border: 1,
              width: "40%",
              height: "70%",
              borderRadius: 0,
              color: "#FB246A",
            }}
          >
            Login
          </Button>
        </Box>
      )}
    </>
  );
};
