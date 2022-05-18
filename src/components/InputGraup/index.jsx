import { Box, InputBase, Divider } from "@mui/material";
import React from "react";

export default ({ foo, bosh }) => {
  return (
    <>
      <Box>
        {foo && (
          <InputBase
            sx={{
              backgroundColor: "white",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              pt: "2%",
              pb: "2%",
              pl: "5%",
              width: "100%",
            }}
            placeholder="Email Address"
          />
        )}
        {bosh && (
          <>
            <Box sx={{ display: "flex", width: "140%" }}>
              <InputBase
                sx={{ pl: 5, width: "100%" }}
                placeholder="Job Tittle or keyword"
              />
              
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
