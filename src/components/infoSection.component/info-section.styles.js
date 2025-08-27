import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

     h1 {
        font-size: 3em;

    }
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

export const ColumnRight = styled.div`
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: end;
    align-items: center;

    @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width: 60%;
        height: 60%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
`;
