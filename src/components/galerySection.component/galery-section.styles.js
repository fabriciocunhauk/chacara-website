import styled, { css } from 'styled-components';
import galeryBackground from '../../images/outside-area-16.jpg';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const GalerySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
    width: 100vw;
    padding: 100px 0;
    position: relative;
    background-image: url(${galeryBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    h1 {
        font-size: 3em;
        color: white;
    }


    &::before {
        content: "";
        background: #00A699;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: .7;
    }
`;

export const GaleryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
`;

export const CardImage = styled.img`
    width: 320px;
    height: 190px;
    object-fit: cover;
    box-shadow: 1px 1px 20px black;
    transition: all .4s ease-in-out;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        transform: scale(1.03);
    }
`;

export const MyImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin-top: 30px;
    top: 0;
    bottom: 0;
    position: fixed;

    &::before {
        content: "";
        background: #00A699;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: .9;
    }
`;

export const MyImage = styled.img`
    width: 80%;
    height: 80%;

    @media (max-width: 700px) {
        width: 100%;
        object-fit: contain;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 40px;
    right: 40px;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media (max-width: 700px) {
        top: 50px;
        right: 20px;
    }
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    margin-left: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: white;
        color: black;
        transform: scale(1.05)
    }
`;

export const Forward = styled(IoArrowForward)`
    ${ArrowButtons}

    @media (max-width: 700px) {
        right: 1px;
        position: absolute;
    }
`;

export const Backward = styled(IoArrowBack)`
    ${ArrowButtons}

    @media (max-width: 700px) {
        left: 1px;
        position: absolute;
    }
`;