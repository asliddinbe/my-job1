import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Box,
  Button,
  Collapse,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import NavList from "./NavList";
import brand from "../../assets/img/nav-brand.webp";

export default () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* laptop */}
        <Box
          sx={{
            width: "100%",
            display: { md: "flex", sm: "none", xs: "none" },
            justifyContent: "space-between",
            boxShadow: "0px -5px 10px",
          }}
        >
          <img src={brand} />
          <NavList none />
          <Box>
            <Button>Register</Button>
            <Button>Login</Button>
          </Box>
        </Box>
        {/* mobile */}
        <Box
          sx={{
            display: { md: "none", sm: "flex" },
            flexDirection: "column",
            backgroundColor: "#4C4C4C",
            width: { sm: "95%", xs: "100%" },
          }}
        >
          <Box sx={{ display: "flex" }}>
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
                backgroundColor: "#222222",
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
