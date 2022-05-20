import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Box,
  Button,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import NavList from "./NavList";
import brand from "../../assets/img/nav-brand.webp";
import ButtonGraup from "../ButtonGraup";

export default () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "-webkit-sticky",
          position: "fixed",
          width: "100%",
          bgcolor: "white",
          zIndex: "21323",
          top: 0,
        }}
      >
        {/* laptop */}
        <Box
          sx={{
            width: "100%",
            display: { md: "flex", sm: "none", xs: "none" },
            justifyContent: "space-between",
            boxShadow: "0px -5px 10px",
          }}
        >
          <img src={brand} style={{ margin: "0.5% 5.5%" }} />
          <NavList none />
          <ButtonGraup navbutton />
        </Box>
        {/* mobile */}
        <Box
          sx={{
            display: { md: "none", sm: "flex" },
            flexDirection: "column",
            width: { sm: "95%", xs: "100%" },
          }}
        >
          <Box>
            <img src={brand} style={{ marginLeft: "2%" }} />
          </Box>
          <Box sx={{ backgroundColor: "#4C4C4C", display: "flex" }}>
            <ListItemText />
            <ListItemButton
              onClick={handleClick}
              sx={{
                pl: 1,
                pr: 1,
                pt: 0.5,
                pb: 0.5,
                ml: 1,
                mr: 1,
                mt: 1,
                mb: 1,
                borderRadius: 1,
                border: 1,
                color: "white",
                fontFamily: "arial",
                backgroundColor: "#4C4C4C",
                maxWidth: "80px",
                fontWeight: 550,
              }}
            >
              Menu <DehazeIcon />
            </ListItemButton>
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{}}>
            <NavList flex />
          </Collapse>
        </Box>
      </Box>
    </>
  );
};
