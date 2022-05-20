import { Box, Typography } from "@mui/material";
import React from "react";

export default ({ header1, header2, title, text, header3 }) => {
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
            pt: "5%",
            pb: "5%",
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
      {header2 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "arial",
            color: "white",
            pt: "7%",
          }}
        >
          <Typography variant="p" sx={{ fontSize: 14, textAlign: "center" }}>
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { sm: 50, xs: 30 },
              fontWeight: "550",
              textAlign: "center",
              pt: { md: "2%", xs: "5%" },
              width: "70%",
            }}
          >
            {text}
          </Typography>
        </Box>
      )}
      {header3 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "arial",
            color: "white",
            pt: "7%",
          }}
        >
          <Typography variant="p" sx={{ fontSize: 14, textAlign: "center" }}>
            {title}
          </Typography>
          <Typography
            sx={{
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
