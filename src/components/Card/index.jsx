import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, Link, Typography } from "@mui/material";
import tit from "../../assets/img/1.webp";
import ButtonGraup from "../ButtonGraup";
import FeedIcon from "@mui/icons-material/Feed";
import power from "../../assets/img/power.webp";
import { hover } from "@testing-library/user-event/dist/hover";
export default ({ grid1, grid2, grid3, grid4, List }) => {
  const font = { fontSize: 15 };
  return (
    <>
      {grid1 && (
        <Grid container sx={{ pt: "7%" }}>
          <Grid item xs={12}>
            <Grid container columnSpacing={5} rowSpacing={3}>
              {List.map((value) => (
                <Grid key={value} item xs={12} sm={4} md={3} lg={3} xl={3}>
                  <Box
                    role="button"
                    sx={{
                      width: "100%",
                      height: { md: 200 },
                      display: "flex",
                      justifyContent: "center",
                      border: 1,
                      borderColor: "#DAFCEF",
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
                      <Typography>{value.icon1}</Typography>
                      <Typography
                        sx={{ cursor: "pointer", pt: "1%", pb: "1%" }}
                      >
                        {value.soz}
                      </Typography>
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
        <Grid container justifyContent={"center"} sx={{ pb: "10%" }}>
          {List.map((item) => (
            <Grid
              key={item}
              container
              sx={{
                ":hover": {
                  boxShadow: 2,
                },
                width: { md: "80%", sm: "100%" },
                pt: "2%",
                pb: "2%",
                mt: "1%",
                mb: "1%",
              }}
            >
              <Box sx={{ pt: "5%" }} />
              <Grid
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", xs: "start" },
                  alignItems: "center",
                }}
              >
                <img src={item.img} />
              </Grid>
              <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
                <Box>
                  <Typography sx={{ fontSize: 25, pt: "2%" }}>
                    Digital Marketer
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { sm: "row", xs: "column" },
                      gap: { md: "30px", xs: "10px" },
                      color: "silver",
                    }}
                  >
                    <Typography sx={font}>Creative Agency</Typography>
                    <Typography sx={font}>Athens, Greece</Typography>
                    <Typography sx={font}> $3500 - $4000</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                xs={12}
                sm={2}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  alignItems: { sm: "center", xs: "start" },
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <ButtonGraup cardbutton />
                <Typography sx={{ pt: "5%", color: "silver", width: "45%" }}>
                  7 hours ago
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
      {grid3 && (
        <Grid container sx={{ pt: "5%", pb: "10%" }}>
          <Grid item xs={12}>
            <Grid container columnSpacing={5} rowSpacing={3}>
              {List.map((value) => (
                <Grid
                  key={value}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{}}
                >
                  <Box
                    role="button"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#26317F",
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
                        color: "white",
                      }}
                    >
                      <Typography
                        sx={{
                          transform: " rotateY(0)",
                          width: "100%",
                          textAlign: "center",
                          ":hover": { transform: " rotateY(150deg)" },
                          transition: "2s",
                        }}
                      >
                        {value.icon2}
                      </Typography>
                      <Typography sx={{ fontSize: 25 }}>{value.job}</Typography>
                      <Typography sx={{ textAlign: "center", pt: "2%" }}>
                        Sorem spsum dolor sit amsectetur <br /> adipisclit,
                        seddo eiusmod tempor <br /> incididunt ut laborea.
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
      {grid4 && (
        <Grid container>
          {List.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ pb: "10%" }}>
              <Box sx={{ position: "relative" }}>
                <img src={item.img} style={{ width: "90%" }} />
                <Typography
                  sx={{
                    bottom: 4,
                    position: "absolute",
                    backgroundColor: "red",

                    width: "15%",
                    textAlign: "center",
                    color: "white",
                    pt: "2%",
                    pb: "2%",
                  }}
                >
                  24 <br /> Now
                </Typography>
              </Box>
              <Typography sx={{ pt: "7%", pl: "5%" }}>
                <Typography sx={{ color: "silver" }}>| Properties</Typography>
                <Typography sx={{ fontWeight: "600", fontSize: 30, pt: "2%" }}>
                  Footprints in Time is perfect <br /> House in Kurashiki
                </Typography>
                <Typography sx={{ fontSize: 14, pt: "3%" }}>
                  READ MORE »
                </Typography>
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
