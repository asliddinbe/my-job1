import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import img from "../../assets/img/nav-brand.webp";
export default () => {
  const foo = [{ son: "5000+" }, { son: "451" }, { son: "568" }];
  const icon = {
    fontSize: 17,
    ":hover": {
      color: "#FB246A",
    },
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#010B1D" }}>
        <Box
          sx={{
            pt: "10%",
            pb: "10%",
          }}
        >
          <Container>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ color: "white", fontFamily: "arial" }}
            >
              <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                <Typography>
                  <Typography>ABOUT US</Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      pt: "10%",
                      lineHeight: 2,
                      color: "#506172",
                    }}
                  >
                    Heaven frucvitful doesn't <br /> cover lesser dvsays appear{" "}
                    <br /> creeping seasons so behold.
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                <Typography>
                  <Typography>CONTACT INFO</Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      pt: "10%",
                      lineHeight: 2,
                      color: "#506172",
                    }}
                  >
                    Address :Your address goes here, <br /> your demo address.
                  </Typography>
                  <Box sx={{ pt: "5%" }} />
                  {["Phone : +8880 44338899", "Email : info@colorlib.com"].map(
                    (item, ix) => (
                      <Box key={ix}>
                        <Typography
                          sx={{
                            fontSize: 15,
                            color: "#506172",
                            pt: "2%",
                            ":hover": {
                              pl: "2%",
                              transition: "1s ",
                              color: "#FB246A",
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    )
                  )}
                </Typography>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                <Typography>
                  <Typography> IMPORTANT LINK</Typography>
                  <Box sx={{ pt: "10%" }} />
                  {[
                    "View Project",
                    "Contact Us",
                    "Testimonial",
                    "Proparties",
                    "Support",
                  ].map((link, ix1) => (
                    <Box key={ix1}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          color: "#506172",
                          pt: "2%",
                          ":hover": {
                            pl: "2%",
                            transition: "1s ",
                            color: "#FB246A",
                          },
                        }}
                      >
                        {link}
                      </Typography>
                    </Box>
                  ))}
                </Typography>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                <Typography>
                  <Typography>NEWSLETTER</Typography>
                  <Typography sx={{ pt: "10%", color: "#506172" }}>
                    Heaven fruitful doesn't over lesser in <br /> days. Appear
                    creeping.
                  </Typography>
                  <Box sx={{ pt: "10%" }}>
                    <InputBase
                      sx={{
                        backgroundColor: "white",
                        borderTopLeftRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        pt: "2%",
                        pb: "2%",
                        pl: "5%",
                        width: "80%",
                      }}
                      placeholder="Email Address"
                    />
                    <Button
                      sx={{
                        backgroundColor: "#FB246A",
                        color: "white",
                        maxWidth: "50px",
                        minWidth: "20px",
                        maxHeight: "45px",
                        minHeight: "45px",
                        ":hover": {
                          backgroundColor: "#FB246A",
                        },
                      }}
                    >
                      <TelegramIcon />
                    </Button>
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ color: "white " }}>
          <Container>
            <Grid container>
              <Grid xl={3} lg={3} md={3} sm={4} xs={12} item>
                <img src={img} style={{ color: "white" }} />
              </Grid>
              {foo.map((item, ix3) => (
                <Grid
                  xl={3}
                  lg={3}
                  md={3}
                  sm={4}
                  xs={12}
                  item
                  key={ix3}
                  sx={{ pb: "5%" }}
                >
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                  >
                    <Typography sx={{ fontSize: 25 }}>{item.son}</Typography>
                    <Typography>Talented Hunter</Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <hr />
            <Grid container sx={{ pt: "3%", pb: "3%" }}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                Copyright ©2022 All rights reserved | This template is made with
                by Colorlib
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "end", gap: "15px" }}
              >
                <TwitterIcon sx={icon} />
                <TwitterIcon sx={icon} />
                <TwitterIcon sx={icon} />
                <TwitterIcon sx={icon} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
