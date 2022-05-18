import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import PersonIcon from "@mui/icons-material/Person";
export default () => {
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ pt: "10%" }}>
            <Header
              header1
              title="FEATURED TOURS PACKAGES"
              text="Browse Top Categories"
            />
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
                            <PersonIcon
                              sx={{ color: "#014B85", fontSize: 60 }}
                            />
                          </Typography>
                          <Typography>Design & Creative</Typography>
                          <Typography sx={{ color: "#FB2E9F" }}>
                            (653)
                          </Typography>
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
