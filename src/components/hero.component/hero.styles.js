import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    max-height: 1100px;
    overflow: hidden;
`;

export const HeroWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    z-index: 0;
`;

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const HeroSlider = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   transition: opacity 0.7s ease-in-out; /* Added transition */
   opacity: 0;

   &.active {
       opacity: 1;
   }

   &::before {
       content: '';
       position: absolute;
       z-index: 2;
       width: 100%;
       height: 100vh;
       bottom: 0vh;
       left: 0;
       overflow: hidden;
       opacity: 0.4;
       background: linear-gradient(0deg, 
       rgba(0,0,0,0.2) 0%, 
       rgba(0,0,0,0.2) 50%, 
       rgba(0,0,0,0.6) 100%);
   }
`;

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transition: transform 0.7s ease-in-out; /* Added transition */
    transform: scale(1.05);

    &.active {
        transform: scale(1);
    }
`;

export const HeroContent = styled.div`
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2.5rem);  
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 10px black;
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        font-weight: bold;
        margin-bottom: 1.2rem;
    }

    .airbnb-logo {
        width: 25px;
        margin-right: 20px;
    }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;  
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #00A699;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #00A699;
        color: black;
        transform: scale(1.05)
    }
`;

export const SliderButtons = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
    ${ArrowButtons}
`;

// New Slider Dots components
export const SliderDots = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ active }) => active && css`
    background-color: #00A699;
    transform: scale(1.2);
  `}

  &:hover {
    background-color: #00A699;
  }
`;