import { Box, Button } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
export default ({ navbutton, foo }) => {
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
            className="btn btn2"
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
            className="btn btn1"
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
      {foo && (
        <Button
          sx={{
            backgroundColor: "#FB246A",
            color: "white",
            maxWidth: "50px",
            minWidth: "20px",
            maxHeight: "40px",
            minHeight: "40px",
            ":hover": {
              backgroundColor: "#FB246A",
            },
          }}
        >
          <TelegramIcon />
        </Button>
      )}
    </>
  );
};
