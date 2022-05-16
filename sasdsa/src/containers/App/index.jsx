import { Box } from "@mui/material";
import React from "react";

import { useRoutes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { routes } from "../../routes/routes";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box>{content}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
