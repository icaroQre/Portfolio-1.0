import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperStyled = styled(Swiper)`

    width: 100%;
    height: 25%;
    position: absolute;

`

export const SwiperSlideStyled = styled(SwiperSlide)`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary};

`