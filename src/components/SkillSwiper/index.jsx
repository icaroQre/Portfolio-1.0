import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { SwiperStyled, SwiperSlideStyled } from "./style";
import "./style";

import { FaReact, FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si"

const SkillSwiper = (props) => {
  return (
    <SwiperStyled
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
        spaceBetween={100}
    >
      <SwiperSlideStyled > <FaReact className="color" fontSize = {props.size} /> </SwiperSlideStyled>
      <SwiperSlideStyled > <FaGithub  fontSize = {props.size} /> </SwiperSlideStyled>
      <SwiperSlideStyled > <IoLogoJavascript fontSize = {props.size} /> </SwiperSlideStyled>
      <SwiperSlideStyled > <SiStyledcomponents fontSize = {props.size} /> </SwiperSlideStyled>
      <SwiperSlideStyled > <FaHtml5 fontSize = {props.size} /> </SwiperSlideStyled>
      <SwiperSlideStyled > <IoLogoCss3 fontSize = {props.size} /> </SwiperSlideStyled>
    </SwiperStyled>
  );
};
export default SkillSwiper;