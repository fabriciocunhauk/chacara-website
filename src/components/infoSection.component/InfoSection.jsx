import React from 'react';
import { ContentContainer, Section, ColumnLeft, ColumnRight, Image } from './info-section.styles';
import { Container } from '../container.component/container.styles';

function InfoSection({ heading, paragraphOne, paragraphTwo, reverse, image }) {
    return (
        <Section id="about-section">
             <h1>Sobre Nós</h1>
             <Container>
            <ContentContainer>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <Image src={image} alt="home" />
                </ColumnRight>
            </ContentContainer>
             </Container>
        </Section>
    )
};

export default InfoSection;
