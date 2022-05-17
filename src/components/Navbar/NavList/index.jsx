import { List, ListItemButton, Typography } from "@mui/material";
import React from "react";

export default ({ flex, none }) => {
  return (
    <>
      {flex && (
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: "#4C4C4C" }}
        >
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
        <List
          component="div"
          disablePadding
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {["Home", "Find a jobs", "About", "Page", "Contact"].map((item) => (
            <ListItemButton
              key={item}
              sx={{
                maxWidth: "30%",
                maxHeight: "20px",
                ":hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: 15,
                  ":hover": {
                    color: "#FB246A",
                  },
                }}
              >
                {item}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
};
