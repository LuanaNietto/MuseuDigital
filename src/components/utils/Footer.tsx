import React from 'react';
import styled from 'styled-components';

interface ContactFooterProps {
  backgroundColor?: string;
  textColor?: string;
  id?: string;
}

const Footer = styled.footer<{ $bgColor?: string; $color?: string }>`
  background-color: ${props => props.$bgColor || '#e1e1e1'};
  color: ${props => props.$color || '#222'};
  padding: 1.5rem;
`;

const FooterBlock = styled.div`
  max-width: 100vw;
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

export const ContactFooter: React.FC<ContactFooterProps> = ({
  backgroundColor = '#e1e1e1',
  textColor = '#222',
  id = 'contato',
}) => {
  return (
    <Footer 
      id={id} 
      $bgColor={backgroundColor} 
      $color={textColor}
    >
      <FooterBlock>
        <h3>Informações do site</h3>
        <p>Escola: E.E.B Antônio Guglielmi Sobrinho</p>
        <p>Professor: Natan de Oliveira Rezende</p>
        <p>Turma: 202</p>
        <p style={{fontSize: '11px', color: '#808080'}}>Desenvolvido por Luana Nietto</p>
      </FooterBlock>
    </Footer>
  );
};