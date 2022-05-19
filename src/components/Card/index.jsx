import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, Typography } from "@mui/material";
import { grid } from "@mui/system";
export default ({ grid1, grid2 }) => {
  return (
    <>
      {grid1 && (
        <Grid container sx={{ pt: "7%" }}>
          <Grid item xs={12}>
            <Grid container columnSpacing={5} rowSpacing={3}>
              {[0, 1, 2, , 2, 2, 1, 1, 1].map((value) => (
                <Grid key={value} item xs={12} sm={4} md={3} lg={3} xl={3}>
                  <Box
                    role="button"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      ":hover": {
                        boxShadow: 1,
                        color: "#FB2E9F",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: "15%",
                        pt: "15%",
                      }}
                    >
                      <Typography>
                        <PersonIcon sx={{ color: "#014B85", fontSize: 60 }} />
                      </Typography>
                      <Typography>Design & Creative</Typography>
                      <Typography sx={{ color: "#FB2E9F" }}>(653)</Typography>
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
      {grid2 && (
        <Grid
          justifyContent={"center"}
          sx={{
            ":hover": {
              boxShadow: 2,
            },
            width: "80%",
          }}
        >
          <Grid container>
            <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
              1
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
              2
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
              3
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
