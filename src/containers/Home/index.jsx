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
// import odam from "../../assets/img/1221.png";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EngineeringIcon from "@mui/icons-material/Engineering";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
const iconstyle = { fontSize: 60 };
const icon = [
  {
    icon1: <PersonIcon sx={iconstyle} />,
    soz: "Design & Creative",
  },
  {
    icon1: <DesktopWindowsIcon sx={iconstyle} />,
    soz: "Design & Development",
  },
  {
    icon1: <InsertDriveFileIcon sx={iconstyle} />,
    soz: "Sales & Marketing",
  },
  {
    icon1: <PhoneAndroidIcon sx={iconstyle} />,
    soz: "Mobile Application",
  },
  {
    icon1: <EngineeringIcon sx={iconstyle} />,
    soz: "Construction",
  },
  {
    icon1: <EmojiObjectsIcon sx={iconstyle} />,
    soz: "Information Technology",
  },
  {
    icon1: <LocationCityIcon sx={iconstyle} />,
    soz: "Real Estate",
  },
  {
    icon1: <StickyNote2Icon sx={iconstyle} />,
    soz: "Content Writer",
  },
];
const card333 = [
  {
    img: require("../../assets/img/1.webp"),
  },
  {
    img: require("../../assets/img/3.webp"),
  },
  {
    img: require("../../assets/img/2.webp"),
  },
  {
    img: require("../../assets/img/4.webp"),
  },
];
const qwerty = [
  {
    icon2: <InsertDriveFileIcon sx={iconstyle} />,
    job: "1. Search a job",
  },
  {
    job: "2. Apply for job",
    icon2: <EngineeringIcon sx={iconstyle} />,
  },
  {
    icon2: <StickyNote2Icon sx={iconstyle} />,
    job: "3. Get your job",
  },
];
const qwert = [
  {
    img: require("../../assets/img/power.webp"),
  },
  {
    img: require("../../assets/img/power2.webp"),
  },
];
export default () => {
  return (
    <>
      <Box>
        <Box>
          <Box sx={{ bgcolor: "#EAEEFF", pt: "5%" ,pb: "5%" }}>
            <Container>
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
                  {/* <img src={odam} style={{ width: "100%", height: "100%" }} /> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container>
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
              <Card grid1 List={icon} />
              <ButtonGraup topbtn btntext="BROWSE ALL SECTORS" />
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: "#475292",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Header
            header2
            title="FEATURED TOURS PACKAGES"
            text="Make a Difference with  Your Online Resume!"
          />
          <ButtonGraup topbtn btntext="UPLOAD YOUR CV" />
        </Box>
        <Container>
          <Box>
            <Header title="RECENT JOB" text="Featured Jobs" header1 />
            <Card grid2 List={card333} />
          </Box>
        </Container>
        <Box sx={{ bgcolor: "#1F2B7C" }}>
          <Container>
            <Header title="APPLY PROCESS" text="How it works" header3 />
            <Card grid3 List={qwerty} />
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
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{ position: "relative" }}
            >
              <img src={person} width={"100%"} />
              <Box
                sx={{
                  position: "absolute",
                  width: { sm: "25%", xs: "50%" },
                  height: { sm: "15%", xs: "30%" },
                  textAlign: "center",
                  color: "white",
                  bgcolor: "#1F2B7B",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  bottom: 5,
                  right: { lg: 500, md: 430 },
                }}
              >
                <Typography>Since</Typography>
                <Typography sx={{ fontSize: 50 }}>1994</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Card grid4 List={qwert} />
        </Container>
      </Box>
    </>
  );
};
