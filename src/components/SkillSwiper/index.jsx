import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { slideStyle, swiperStyle } from "./style";
import "./style";

import { FaReact, FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si"

const SkillSwiper = (props) => {
  return (
    <Swiper
        style={swiperStyle}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }}
    >
      <SwiperSlide style={slideStyle}> <FaReact color = {props.color} fontSize = {props.size} /> </SwiperSlide>
      <SwiperSlide style={slideStyle}> <FaGithub color = {props.color} fontSize = {props.size} /> </SwiperSlide>
      <SwiperSlide style={slideStyle}> <IoLogoJavascript color = {props.color} fontSize = {props.size} /> </SwiperSlide>
      <SwiperSlide style={slideStyle}> <SiStyledcomponents color = {props.color} fontSize = {props.size} /> </SwiperSlide>
      <SwiperSlide style={slideStyle}> <FaHtml5 color = {props.color} fontSize = {props.size} /> </SwiperSlide>
      <SwiperSlide style={slideStyle}> <IoLogoCss3 color = {props.color} fontSize = {props.size} /> </SwiperSlide>
    </Swiper>
  );
};
export default SkillSwiper;