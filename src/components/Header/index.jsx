import { Box, Typography } from "@mui/material";
import React from "react";

export default ({ header1, title, text }) => {
  return (
    <>
      {header1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "arial",
          }}
        >
          <Typography
            variant="p"
            sx={{ color: "#FB2461", fontSize: 14, textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#28395A",
              fontSize: { sm: 50, xs: 30 },
              fontWeight: "550",
              textAlign: "center",
              pt: { md: "2%", xs: "5%" },
            }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </>
  );
};
