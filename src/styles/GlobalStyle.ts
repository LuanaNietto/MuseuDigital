import styled, { createGlobalStyle, css } from 'styled-components';

import { BrowserRouter as Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');
  
`;
export const Header = styled.header`
  width: 100%;
  background: #e1e1e1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 22px 36px 0 36px;
  font-family: 'Helvetica world', 'Helvetica Neue', Arial, sans-serif;
`;
//-----------------------HOME PAGE----------------------------
export const FullPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  height: 100vh;
  width: 100vw;
  background: #e1e1e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica world', sans-serif;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #e1e1e1;
  border-radius: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: none;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 98vw;
    height: auto;
    max-height: none;
    align-items: center;
    padding: 16px 0;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: none;
  font-family: 'Helvetica world', sans-serif;
  border: none;
  color: #222222;
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const DropdownMenu = styled.ul<{ open: boolean }>`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  top: 2.1em;
  right: 0;
  background: #fff;
  border-radius: 8px;
  min-width: 130px;
  box-shadow: 0 3px 12px #0002;
  padding: 0.3em 0;
  margin: 0;
  z-index: 5;
  list-style: none;
`;

export const DropdownMenuItem = styled.li`
  a {
    color: #222222;
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    font-family: 'Helvetica world', sans-serif;
    transition: background .18s;
    border-radius: 8px;
    &:hover {
      background: #e1e1e1;
    }
  }
`;

export const MainContainer = styled.main`
  max-width: 1100px;
  margin: 38px auto;
  background: #e1e1e1;
  border-radius: 12px;
  display: flex;
  min-height: 500px;
  font-family: 'Helvetica world', sans-serif;
  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 350px;
    padding: 22px 0;
  }
`;

export const ColLeft = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px 36px 28px 54px;
  @media (max-width: 900px) {
    padding: 36px 18px 18px 18px;
  }
`;

export const ColRight = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 40px;
  @media (max-width: 900px) {
    padding: 24px 16px;
    align-items: center;
  }
`;

export const MiniTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 55px;
  margin-bottom: 30px;
  margin-left: 50px;
  letter-spacing: .1em;
  color: #222222;
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid #222;
    width: 75px;
    margin-top: 6px;
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  font-size: 3.7rem;
  margin: 60px 80px 0px;
  font-weight: 500;
  color: #222222;
  @media (max-width: 900px) {
    margin: 18px 0 28px;
    text-align: left;
    font-size: 2rem;
  }
`;

//-----------------------HOME PAGE----------------------------

export const AboutImg = styled.img`
  width: 840px;
  max-width: 850px;
  margin-top: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 9px #0000000d;
`;

export const AboutText = styled.p`
  font-size: 1.20rem;
  color: #222222;
  line-height: 1.67;
  margin-top: 18px;
  max-width: 920px;
  text-align: left;
`;

// --------------------------------------------------------------------

// ACERVO
export const ConhecaContainer = styled.section`
  max-width: 100%px;
  margin: 0px auto 0 auto;
  padding: 22px 0 0 0;
  background: #e1e1e1;
`;

export const ConhecaTitle = styled.h3`
  font-family: 'Helvetica world', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 55px;
  margin-bottom: 30px;
  margin-left: 100px;
  letter-spacing: .2em;
  color: #222222;
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid #222;
    width: 75px;
    margin-top: 6px;
    opacity: 0.5;
  }
`;

export const ConhecaBlocos = styled.div`
  margin: 0 0 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
`;

export const ConhecaBloco = styled.a`
  display: block;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: #222;
  box-shadow: 0 1px 3px #ddd;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 3px 16px #bbb8;
  }
`;

// ---------------------------------------------------------------------

export const Block = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  backdrop-filter: blur(5px);
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
`

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

// Carousel
export const MainImageContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  aspect-ratio: 16/7;
  margin: 48px auto 68px auto;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(30, 41, 59, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSource = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  color: #f0f2f7;
  font-size: 0.85rem;
  opacity: 0.7;
  text-shadow: 0 1px 4px #18232db8;
`;

// Sobre (Exposição: Memórias)
export const SobreSection = styled.section`
  max-width: 100%;
  margin: 5px 300px 5px 300px;
  text-align: center;
`;

export const SobreTitle = styled.h2`
  font-size: 3.9rem;
  text-align: center;
  font-weight: 500;
  color: #e1e1e1;
  @media (max-width: 900px) {
    margin: 18px 0 28px;
    text-align: left;
    font-size: 2rem;
  }
`;

export const SobreText = styled.p`
  color: #e1e1e1;
  font-size: 1.10rem;
  text-align: justify;
`;

//-------------------- GALERIA
export const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);     // 3 colunas
  gap: 35px;                                 // espaçamento entre elas
  width: 100%;                               // 80% da tela, se preferir use "80%"
  max-width: 70%;                         // opcional, limite o máximo
  margin: 38px auto 28px auto;               // centraliza o bloco na tela
  box-sizing: border-box;
  padding-bottom: 40px; // espaçamento inferior

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);   // 2 colunas no tablet
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;              // 1 coluna em telas pequenas/mobile
  }
`;

export const GalleryBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;    // <--- deve casar com a height da imagem!
  border-radius: 5px;
  overflow: hidden;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  transition: opacity 0.35s;

  ${GalleryImageWrapper}:hover & {
    opacity: 0.28;
  }
`;

export const GalleryOverlay = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${GalleryImageWrapper}:hover & {
    opacity: 1;
    background: rgba(34, 34, 34, 0.16);
    pointer-events: auto;
  }
`;

export const GalleryOverlayContent = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 7px;
  padding: 16px 17px 12px 17px;
  box-shadow: 0px 2px 14px #0001;
  min-width: 60%;
  text-align: center;
`;

export const GalleryTitle = styled.h3`
  margin: 8px 0 0 0;
  color: #1a2a4f;
  font-size: 1.1rem;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const GalleryAuthor = styled.p`
  margin: 8px 0 3px 0;
  font-size: 0.93rem;
  color: #4e4e5e;
  font-style: italic;
  font-weight: 500;
`;

export const GalleryDesc = styled.p`
  margin: 8px 0 0 0;
  bottom: 0;
  color: #222;
  font-size: 0.97rem;
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 5px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 7px #00000010;
  z-index: 3;

  ${GalleryImageWrapper}:hover & {
    opacity: 1;
  }
  &:hover {
    box-shadow: 0 2px 16px #0003;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  background: rgba(20, 20, 32, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  max-width: 85vw;
  max-height: 85vh;
  border-radius: 9px;
  box-shadow: 0 8px 40px #000b;
  background: #fafafc;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 6vh;
  right: 7vw;
  font-size: 2.6rem;
  color: #eee;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  line-height: 1;
  transition: color .2s;
  &:hover {
    color: #ffb6c1;
  }
`
export const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid #fff;
  margin: 0 0 16px 0;
  width: 100%;
  opacity: 0.33;
`;

// MEMORIAS---------------------------------------------------------------------

export const About = styled.section`
  margin: 28px auto 26px auto;
  max-width: 600px;
  text-align: left;
  & > h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #282828;
    margin-bottom: 8px;
  }
  & > p {
    color: #333;
    font-size: 1.15rem;
    line-height: 1.5;
  }
`;


// ----------------FOOTER-------------------
export const Footer = styled.footer`
  background: #222222;
  color: #e1e1e1;
  text-align: center;
  padding: 10px 8vw 10px 8vw;
  font-family: 'Helvetica world', sans-serif;
`;

export const FooterBlock = styled.div`
  max-width: 400px;
  margin: auto;
`;

// ----------------FOOTER-------------------

export const Overlay = styled.div`
  min-height: 100%;
  background: #222222;
  margin: 0;
  font-family: 'Helvetica world', sans-serif;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 16px;
`;

export const NavButton = styled.a`
  background: transparent;
  color: #fff;
  font-weight: 500;
  border: none;
  padding: 6px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1.13rem;
  cursor: pointer;
  transition: background .18s, color .18s;
  &:hover, &:focus {
    background: #fff;
    color: #17273c;
    text-decoration: underline;
  }
`;

// Carrossel central grande (tipo Bootstrap)
export const MainCarousel = styled.section`
  width: 100%;
  background: #aaa;
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
`;

export const CarouselImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 550px;
  position: relative;
  background: #6a6d78;
//   border-radius: 16px;
  box-shadow: 0 5px 22px #0002;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CarouselImage = styled.img`
  width: 100%;
  height: 100%; /* aumente junto */
  object-fit: cover;
  display: block;
`;

export const CarouselLegend = styled.div`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background: linear-gradient(180deg,rgba(34,37,44,0.6) 0%,rgba(34,37,44,0.11) 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  h2 {
    font-size: 2rem;
    margin-bottom: 13px;
    font-weight: 700;
    pointer-events: auto;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 13px;
    pointer-events: auto;
  }
`;

export const CarouselActions = styled.div`
  margin-top: 12px;
  pointer-events: auto;
`;

// Bloco principal Sobre+Galeria
export const SectionBlock = styled.section`
  background: #fff;
  border-radius: 13px;
  padding: 22px 22px 22px 22px;
  width: 78vw;
  max-width: 1170px;
  margin: 36px auto 38px auto;
  box-shadow: 0 2px 12px #ececec;
`;
// ----------------------------------FEATURETTE---------------------------------
export const Featurette = styled.section<{ invert?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 60px auto 60px auto;
  max-width: 1050px;
  padding: 36px 0;
  border-bottom: 1px solid #e7e7e7;

  ${({ invert }) =>
    invert &&
    css`
      flex-direction: row-reverse;
    `}
  
  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    gap: 28px;
    padding: 24px 0;
  }
`;

export const FeaturetteImg = styled.img`
  width: 500px;
  max-width: 500vw;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  background: #ececec;
  flex-shrink: 0;

  @media (max-width: 850px) {
    width: 230px;
    height: 230px;
  }
`;

export const FeaturetteText = styled.div`
  flex: 1;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 5px;
    color: #313644;
    font-weight: 700;
  }
  p {
    color: #666a72;
    font-size: 1.2rem;
    margin-bottom: 18px;
    max-width: 420px;
    text-align: left;
    @media (max-width: 850px) {
      text-align: center;
      margin: 0 auto 18px auto;
    }
  }
`;

export const FeaturetteButton = styled.a`
  color: #fff;
  background: #363636;
  border: none;
  padding: 10px 28px;
  border-radius: 44px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.2s;
  display: inline-block;
  margin-top: 8px;
  &:hover {
    background: #808080;
    color: #fff;
    text-decoration: none;
  }
`;
// ----------------------------------FEATURETTE---------------------------------
;