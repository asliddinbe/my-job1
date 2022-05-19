import {
  Box,
  Container,
  Divider,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import ButtonGraup from "../../components/ButtonGraup";
import Swiper from "../../components/Swiper";
import person from "../../assets/img/qwqw.webp";
export default () => {
  return (
    <>
      <Box>
        <Container>
          <Box>
            <Grid container sx={{ pt: "10%", pb: "10%" }}>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Typography
                  sx={{
                    fontSize: { md: 65, sm: 55, xs: 25 },
                    fontWeight: { md: "900", sm: "800", xs: "600" },
                    color: "#28395A",
                  }}
                >
                  Find the most exciting startup jobs
                </Typography>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={5}
                    lg={5}
                    xl={5}
                    sx={{ display: "flex" }}
                  >
                    <InputBase
                      placeholder="Job Tittle or keyword"
                      sx={{
                        width: "100%",
                        pt: "5%",
                        pb: "5%",
                        pl: "4%",
                      }}
                    />
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ display: { sm: "flex", xs: "none" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                    <ButtonGraup bosh />
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <ButtonGraup btn />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                2
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              pt: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Header
              header1
              title="FEATURED TOURS PACKAGES"
              text="Browse Top Categories"
            />
            <Card grid1 />
            <ButtonGraup topbtn btntext="BROWSE ALL SECTORS" />
          </Box>
        </Container>
        <Box
          sx={{
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Header
            header2
            title="FEATURED TOURS PACKAGES"
            text="Make a Difference with Your Online Resume!"
          />
          <ButtonGraup topbtn btntext="UPLOAD YOUR CV" />
        </Box>
        <Container>
          <Box>
            <Header title="RECENT JOB" text="Featured Jobs" header1 />
            <Card grid2 />
          </Box>
        </Container>
        <Box sx={{ bgcolor: "blue" }}>
          <Container>
            <Header title="APPLY PROCESS" text="How it works" header3 />
            <Card grid3 />
          </Container>
        </Box>
        <Container sx={{ pt: "10%", pb: "10%" }}>
          <Swiper />
          <Grid container sx={{ pt: "10%" }}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <Header
                header1
                title="WHAT WE ARE DOING"
                text="24k Talented people are getting Jobs"
              />
              <Typography sx={{ width: "80%" }}>
                <Typography sx={{ fontWeight: "600", lineHeight: 1.5 }}>
                  Mollit anim laborum duis au dolor in voluptate velit ess
                  cillum dolore eu lore dsu quality mollit anim laborumuis au
                  dolor in voluptate velit cillum.
                </Typography>
                <br />
                <br />
                <Typography sx={{ lineHeight: 2, fontSize: 15 }}>
                  Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate
                  velit esscillumlore eu quife nrulla parihatur. Excghcepteur
                  signjnt occa cupidatat non inulpadeserunt mollit aboru.
                  temnthp incididbnt ut labore mollit anim laborum suis aute.
                </Typography>
                <ButtonGraup btn2 />
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={person} width={"100%"} />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Card grid4 />
        </Container>
      </Box>
    </>
  );
};
