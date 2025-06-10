import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Gallery, GalleryBlock, GalleryImage, GalleryTitle,
Overlay, ModalCloseButton, ModalImage, ModalOverlay, GalleryOverlay, GalleryAuthor, GalleryDesc, GalleryOverlayContent, GalleryImageWrapper, ExpandButton, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Footer, FooterBlock} from '../styles/GlobalStyle';

import Imagem1 from '../img/FestaMelancia/IMAGEM 1.jpg';
import Imagem2 from '../img/FestaMelancia/IMAGEM 2.jpg';
import Imagem3 from '../img/FestaMelancia/IMAGEM 3.jpeg';
import Imagem4 from '../img/FestaMelancia/IMAGEM 4.jpg';
import Imagem5 from '../img/FestaMelancia/IMAGEM 5.jpg';
import Melancia from '../img/FestaMelancia/imagem6.jpeg';


const galleryItems = [
  { src: Imagem1, name: "Manoel", autor: "Manoel", desc: "Manoel, um dos primeiros moradores da região, sempre foi uma figura central na comunidade." },
  { src: Imagem2, name: "Bebê", autor: "Bebê", desc: "Bebê, a alegria da família, sempre traz um sorriso a todos." },
  { src: Melancia, name: "Bebê 2", autor: "Bebê 2", desc: "Bebê 2, sempre cheio de energia, é o orgulho da família." },

]; 

const galleryItems2 = [
  { src: Imagem3, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Imagem4, name: "Eli", autor: "Eli", desc: "Eli, um dos primeiros pescadores da região, sempre trouxe histórias do mar." },
  { src: Imagem5, name: "Nega", autor: "Nega", desc: "Nega, uma figura carismática da comunidade, sempre foi conhecida por sua alegria contagiante." },  
];


const FestaMelancia = () => {
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
        <SobreTitle>FESTA DA MELANCIA</SobreTitle>
        <Divider />
        <SobreText>
          A festa começou há mais de cinco décadas, quando os primeiros moradores da cidade se reuniram para celebrar a padroeira local, Santa Luzia. Após uma missa realizada sob uma figueira, os vizinhos compartilharam melancias, fruto abundante na região. Esse gesto de confraternização deu origem a uma tradição que perdura até hoje.
          Campo Mãe Luzia é reconhecido como o “vale das melancias” devido à sua expressiva produção da fruta. A melancia é uma fonte significativa de renda para muitas famílias da comunidade, sendo cultivada em cerca de 35 hectares. A festa celebra não apenas a colheita, mas também a identidade agrícola e cultural da região.
          
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
        <SobreTitle>Caracteríscas Marcadas</SobreTitle>
        <Divider />
        <SobreText>
         Degustação e venda de melancias: Disponibilização de melancia para consumo e comercialização.<br />
         Competições e atividades tradicionais: Pesagem de maior melancia, leilões, concursos de quem vem mais melancia, acertar o milho no balaio, Pedal da Melancia, Bailes com música ao vivo, Exposição agropecuária e cultural, Feira de artesanato e produtos locais, etc.
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

export default FestaMelancia;