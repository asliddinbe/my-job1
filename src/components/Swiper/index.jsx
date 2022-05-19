import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import person from "../../assets/img/12121212121212.webp";
import "./styles.css";

import { Pagination } from "swiper";
import { Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <SwiperSlide
          style={{
            height: "400px",
          }}
        >
          <Typography>
            <img src={person} />
            <Typography sx={{ fontWeight: "600", pt: "1%", pb: "1%" }}>
              Margater Lawson
            </Typography>
            <Typography sx={{ fontSize: 14, color: "silver" }}>
              {" "}
              Creative Director
            </Typography>
            <Typography sx={{ pt: "5%" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati inventore modi <br /> corrupti voluptatem placeat
              provident, voluptate minus accusamus quasi <br /> tempora
              laboriosam fugiat
            </Typography>
          </Typography>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "400px",
          }}
        >
          <Typography>
            <img src={person} />
            <Typography sx={{ fontWeight: "600", pt: "1%", pb: "1%" }}>
              Margater Lawson
            </Typography>
            <Typography sx={{ fontSize: 14, color: "silver" }}>
              {" "}
              Creative Director
            </Typography>
            <Typography sx={{ pt: "5%" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati inventore modi <br /> corrupti voluptatem placeat
              provident, voluptate minus accusamus quasi <br /> tempora
              laboriosam fugiat
            </Typography>
          </Typography>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "400px",
          }}
        >
          <Typography>
            <img src={person} />
            <Typography sx={{ fontWeight: "600", pt: "1%", pb: "1%" }}>
              Margater Lawson
            </Typography>
            <Typography sx={{ fontSize: 14, color: "silver" }}>
              {" "}
              Creative Director
            </Typography>
            <Typography sx={{ pt: "5%" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati inventore modi <br /> corrupti voluptatem placeat
              provident, voluptate minus accusamus quasi <br /> tempora
              laboriosam fugiat
            </Typography>
          </Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
