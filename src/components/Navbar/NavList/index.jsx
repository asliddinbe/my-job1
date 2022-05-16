import { List, ListItemButton, Typography } from "@mui/material";
import React from "react";

export default ({ flex, none }) => {
  return (
    <>
      {flex && (
        <List component="div" disablePadding>
          {["Home", "Find a jobs", "About", "Page+", "Contact"].map((item) => (
            <ListItemButton key={item}>
              <Typography sx={{ color: "white", fontSize: 15 }}>
                {item}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      )}
      {none && (
        <List component="div" disablePadding sx={{ display: "flex" }}>
          {["Home", "Find a jobs", "About", "Page+", "Contact"].map((item) => (
            <ListItemButton key={item}>
              <Typography sx={{ color: "black", fontSize: 15 }}>
                {item}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
};
