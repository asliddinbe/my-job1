import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

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
          flexDirection: "column",
          color: "silver",
          width: "200%",
        }}
      >
        <ListItemButton onClick={handleClick}>
          <Typography>Locatoin PK</Typography>
          <ListItemText />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            bgcolor: "white",
            mt: "3%",
            mb: "3%",
          }}
        >
          <List component="div" disablePadding>
            <ListItemButton>
              <Typography sx={{ fontSize: "14px" }}>Locatoin PK</Typography>
            </ListItemButton>
            <ListItemButton>
              <Typography sx={{ fontSize: "14px" }}>Locatoin PK</Typography>
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </>
  );
};
