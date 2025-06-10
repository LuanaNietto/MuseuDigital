import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Gallery, GalleryBlock, GalleryImage, GalleryTitle,
Overlay, ModalCloseButton, ModalImage, ModalOverlay, GalleryOverlay, GalleryAuthor, GalleryDesc, GalleryOverlayContent, GalleryImageWrapper, ExpandButton, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Footer, FooterBlock} from '../styles/GlobalStyle';

import Imagem from '../img/festaTainha/Img 1 - festa da tainha.png';
import Imagem1 from '../img/festaTainha/img 2 - festa da tainha.png';
import Imagem2 from '../img/festaTainha/img 3 - festa da tainha.png';
import Imagem3 from '../img/festaTainha/WhatsApp Image 2025-06-08 at 23.30.23.jpeg';
import Imagem4 from '../img/festaTainha/princesas.jpg';
import Pesca from '../img/festaTainha/pesca.jpeg';


const galleryItems = [
  { src: Imagem2, name: "Bebê 2", autor: "Bebê 2", desc: "Bebê 2, sempre cheio de energia, é o orgulho da família." },
  { src: Imagem, name: "Manoel", autor: "Manoel", desc: "Manoel, um dos primeiros moradores da região, sempre foi uma figura central na comunidade." },
  { src: Imagem1, name: "Bebê", autor: "Bebê", desc: "Bebê, a alegria da família, sempre traz um sorriso a todos." },
]; 

const galleryItems2 = [
  { src: Imagem3, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Imagem4, name: "Eli", autor: "Eli", desc: "Eli, um dos primeiros pescadores da região, sempre trouxe histórias do mar." },
  { src: Pesca, name: "Nega", autor: "Nega", desc: "Nega, uma figura carismática da comunidade, sempre foi conhecida por sua alegria contagiante." },
  
];


const FestaTainha = () => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
    const refDropdown = useRef<HTMLDivElement | null>(null);
  
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState<{ src: string, alt: string } | null>(null);
  
    const openModal = (src: string, alt: string) => {
      setModalImg({ src, alt });
      setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);
  
    // Fecha dropdown ao clicar fora
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (refDropdown.current && !refDropdown.current.contains(event.target as Node)) {
          setDropdownOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <Overlay>
      <ColLeft>
        <MiniTitle style={{color: "#e1e1e1"}}>
          <Dropdown ref={refDropdown}>
            <DropdownButton onClick={() => setDropdownOpen(o => !o)} style={{color: "#e1e1e1"}}>
                Menu <span style={{
                display: "inline-block",
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .2s", color: "#e1e1e1"
              }}>▼</span>
            </DropdownButton>
            <DropdownMenu open={dropdownOpen}>
              <DropdownMenuItem>
                <a href="/">Home</a>
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </MiniTitle>
      </ColLeft>
      <SobreSection>
        <SobreTitle>FESTA DA TAINHA</SobreTitle>
        <Divider />
        <SobreText>
          A realização da Festa da Tainha conta com o envolvimento de várias pessoas e instituições importantes. Os pescadores artesanais são os grandes protagonistas, pois representam a tradição que deu origem à festa. Além deles, lideranças comunitárias, associações de pescadores, grupos culturais e autoridades locais, como a prefeitura e a Secretaria de Turismo e Cultura, são fundamentais para organizar e manter viva essa tradição. São essas pessoas que ajudam a preservar o saber e o fazer da cultura pesqueira da região.  
        </SobreText>
      </SobreSection>
      <Gallery>
        {galleryItems.map((item, i) => (
            <GalleryBlock key={i}>
            <GalleryImageWrapper>
              <GalleryImage
                src={item.src}
                alt={item.name}
                loading="lazy"
              />
              <GalleryOverlay>
                <GalleryOverlayContent>
                  <GalleryTitle>{item.name}</GalleryTitle>
                  <GalleryAuthor>Por: {item.autor}</GalleryAuthor>
                  <GalleryDesc>{item.desc}</GalleryDesc>
                </GalleryOverlayContent>
              </GalleryOverlay>
              <ExpandButton onClick={() => openModal(item.src, item.name)} aria-label="Expandir imagem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'inline', verticalAlign: 'middle' }}
                >
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" y1="3" x2="14" y2="10"/>
                  <line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
              </ExpandButton>

            </GalleryImageWrapper>  
          </GalleryBlock>
        ))}
      </Gallery>
      <SobreSection>
        <SobreTitle>Características da Festa</SobreTitle>
        <Divider />
        <SobreText>
          A Festa da Tainha é marcada pela forte presença da gastronomia típica, com destaque para os pratos à base de tainha, como tainha assada, recheada e frita. Além da culinária, a programação inclui shows musicais com artistas locais e regionais, apresentações folclóricas, danças, feira de artesanato, exposição de produtos locais e atividades culturais que destacam os costumes e a história dos pescadores. O ambiente da festa é acolhedor, familiar e cheio de elementos que representam a identidade do povo do Balneário Rincão.
        </SobreText>
      </SobreSection>
       <Gallery>
        {galleryItems2.map((item, i) => (
            <GalleryBlock key={i}>
            <GalleryImageWrapper>
              <GalleryImage
                src={item.src}
                alt={item.name}
                loading="lazy"
              />
              <GalleryOverlay>
                <GalleryOverlayContent>
                  <GalleryTitle>{item.name}</GalleryTitle>
                  <GalleryAuthor>Por: {item.autor}</GalleryAuthor>
                  <GalleryDesc>{item.desc}</GalleryDesc>
                </GalleryOverlayContent>
              </GalleryOverlay>
              <ExpandButton onClick={() => openModal(item.src, item.name)} aria-label="Expandir imagem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: 'inline', verticalAlign: 'middle' }}
                >
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" y1="3" x2="14" y2="10"/>
                  <line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
              </ExpandButton>
            </GalleryImageWrapper>  
          </GalleryBlock>
        ))}
      </Gallery>

      {/* Modal */}
      {modalOpen && modalImg && (
        <ModalOverlay onClick={closeModal}>
          <ModalCloseButton
            onClick={e => { e.stopPropagation(); closeModal(); }}
            aria-label="Fechar"
            title="Fechar"
          >
            &times;
          </ModalCloseButton>
          <ModalImage
            src={modalImg.src}
            alt={modalImg.alt}
            onClick={e => e.stopPropagation()}
          />
        </ModalOverlay>
      )}

       <SobreSection>
        <Divider />
        <SobreText style={{ fontSize: "1.6em", lineHeight: "1.6" }}>
         O período de pesca da tainha acontece justamente durante sua migração reprodutiva, nos meses de inverno, principalmente entre maio e julho. É nesse período que grandes cardumes de tainha se aproximam da costa, oferecendo uma oportunidade para os pescadores artesanais realizarem a pesca. Essa prática, além de ser uma tradição cultural, é uma atividade econômica muito importante para várias comunidades litorâneas, como as de Santa Catarina.

        </SobreText>
      </SobreSection>
      {/* CONTATO */}
      <Footer id="contato" style={{ backgroundColor: "#e1e1e1", color: "#222" }}>
        <FooterBlock>
          <h2>Contato</h2>
          <p>Email: contato@museudigital.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </FooterBlock>
      </Footer>  
    </Overlay>
     
  );
}

export default FestaTainha;