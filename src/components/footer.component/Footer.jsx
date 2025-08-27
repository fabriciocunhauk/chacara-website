import React from 'react';
import { FooterContainer, FooterContent1, FooterContent2 } from './footer.styles';
import instagram from '../../images/SVG/instagram.svg';
import email from '../../images/SVG/email.svg';
import location from '../../images/SVG/location.svg';
import phone from '../../images/SVG/phone.svg';
import { Container } from '../container.component/container.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
            <FooterContent1>
                <a href="https://fabriciocunha.co.uk" alt="copyright" rel="noopener noreferrer" target="_blank">Website design by: <strong>Fabricio Cunha</strong></a>
            </FooterContent1>
            <FooterContent2>
                <a href="/"><img src={instagram} alt="instagram" /></a>
                <a href="/"><img src={email} alt="email" /></a>
                <a href="http://maps.google.com/?q=Rua Henrique Braholka - Miringuava, São José dos Pinhais - State of Paraná, Brazil" rel="noopener noreferrer" target="_blank">
                    <img src={location} alt="localizacao" />
                </a>
                <a href="/"><img src={phone} alt="telefone" /></a>
            </FooterContent2>
            </Container>
        </FooterContainer>
    )
}

export default Footer;
