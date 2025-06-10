import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Gallery, GalleryBlock, GalleryImage, GalleryTitle,
Overlay, ModalCloseButton, ModalImage, ModalOverlay, GalleryOverlay, GalleryAuthor, GalleryDesc, GalleryOverlayContent, GalleryImageWrapper, ExpandButton, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Footer, FooterBlock} from '../styles/GlobalStyle';

import Capa from '../img/FestaSaoDonato/CAPA-SAO-DONATO.jpg';
import Imagem1 from '../img/FestaSaoDonato/desenho.jpeg';
import Imagem2 from '../img/FestaSaoDonato/images.jpeg';
import Rua from '../img/FestaSaoDonato/rua.jpg';
import Rua2 from '../img/FestaSaoDonato/rua2.jpg';
import SaoDonato1 from '../img/FestaSaoDonato/saodonato.jpg';
import Missa from '../img/FestaSaoDonato/missa.jpeg';


const galleryItems = [
  { src: Capa, name: "Manoel", autor: "Manoel", desc: "Manoel, um dos primeiros moradores da região, sempre foi uma figura central na comunidade." },
  { src: SaoDonato1, name: "Bebê", autor: "Bebê", desc: "Bebê, a alegria da família, sempre traz um sorriso a todos." },
  { src: Missa, name: "Bebê 2", autor: "Bebê 2", desc: "Bebê 2, sempre cheio de energia, é o orgulho da família." },

]; 

const galleryItems2 = [
  { src: Imagem1, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Rua, name: "Nega", autor: "Nega", desc: "Nega, uma figura carismática da comunidade, sempre foi conhecida por sua alegria contagiante." },
  { src: Rua2, name: "Avô", autor: "Avô", desc: "Avô, sempre com uma história para contar, é a memória viva da família." },
  
];


const SaoDonato = () => {
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
        <SobreTitle>FESTA DE SÃO DONATO</SobreTitle>
        <Divider />
        <SobreText>
          A Festa de São Donato tem origem no século XX, com a chegada dos imigrantes italianos ao sul de Santa Catarina. 
          Movidos pela fé, escolheram São Donato como padroeiro, um santo protetor contra tempestades e doenças. 
          A celebração, que antecede a fundação da Paróquia São Donato em 7 de agosto, já tem mais de 80 anos e é uma das mais antigas da região.
          A festa de são donato é uma forte manifestação de fé católica repleta de gratidão e pedidos de proteção.
          Além das atividades religiosas a festa fortalece o vínculo espiritual da comunidade unindo os fiéis em orações e devoções. 
          Ou seja, a festa de São Donato se transformou ao longo do tempo e hoje a mesma vai além das relações religiosas, se tornando um cartão postal de Içara que atrai muitos turistas.
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
        <SobreTitle>Aspectos Culturais e Atrações</SobreTitle>
        <Divider />
        <SobreText>
          A Festa de São Donato acontece no centro de Içara e conta com ampla estrutura, incluindo gastronomia, Festival das Etnias, Feira da Indústria e Comércio, parque de diversões e shows. A celebração dura vários dias, com peregrinações, novenas e atrações diárias. O ápice é em 7 de agosto, com missa, procissão, bênçãos e sorteio. A festa envolve toda a comunidade e atrai milhares de visitantes.
          Além do aspecto religioso, a Festa de São Donato é também um rico festival cultural que valoriza tradições locais, como a Macarronada de São Donato feita pelas “nonnas”.
          A programação inclui danças italianas, música, artesanato e comidas típicas. Na 74ª edição (2024), destacaram-se o Festival das Etnias, a 24ª Feira da Indústria e Comércio, parque de diversões, sorteio de cartela premiada e apresentações de artistas como Badin, o Colono, e Thiago Brado.

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
          A Festa de São Donato em Içara vai além de um evento religioso: ela celebra a fé, a cultura e a história da comunidade, preserva as tradições dos imigrantes italianos e fortalece o turismo e o desenvolvimento local.
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

export default SaoDonato;