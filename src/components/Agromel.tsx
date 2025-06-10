import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Gallery, GalleryBlock, GalleryImage, GalleryTitle,
Overlay, ModalCloseButton, ModalImage, ModalOverlay, GalleryOverlay, GalleryAuthor, GalleryDesc, GalleryOverlayContent, GalleryImageWrapper, ExpandButton, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Footer, FooterBlock} from '../styles/GlobalStyle';

import Imagem from '../img/FestadoMel/agromel.jpg';
import Imagem1 from '../img/FestadoMel/imagem_2025-06-09_210836423.png';
import Imagem2 from '../img/FestadoMel/E-4.jpg';
import Imagem3 from '../img/FestadoMel/abelhas.jpeg';
import Imagem4 from '../img/FestadoMel/abelhas2.jpg';
import Imagem5 from '../img/FestadoMel/mel1.jpg';
import Imagem6 from '../img/FestadoMel/mel2.jpg';
import Imagem7 from '../img/FestadoMel/mel3.jpg';


const galleryItems = [
  { src: Imagem, name: "Bebê 2", autor: "Bebê 2", desc: "Bebê 2, sempre cheio de energia, é o orgulho da família." },
  { src: Imagem1, name: "Manoel", autor: "Manoel", desc: "Manoel, um dos primeiros moradores da região, sempre foi uma figura central na comunidade." },
  { src: Imagem2, name: "Bebê", autor: "Bebê", desc: "Bebê, a alegria da família, sempre traz um sorriso a todos." },
]; 

const galleryItems2 = [
  { src: Imagem3, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Imagem4, name: "Eli", autor: "Eli", desc: "Eli, um dos primeiros pescadores da região, sempre trouxe histórias do mar." },
  { src: Imagem5, name: "Nega", autor: "Nega", desc: "Nega, uma figura carismática da comunidade, sempre foi conhecida por sua alegria contagiante." },
  { src: Imagem6, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Imagem7, name: "Eli", autor: "Eli", desc: "Eli, um dos primeiros pescadores da região, sempre trouxe histórias do mar." },
  
];

const Agromel = () => {
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
        <SobreTitle>IÇARA - CAPITAL DO MEL</SobreTitle>
        <Divider />
        <SobreText>
          A apicultura em Içara, veio com a introdução da abelha europeia (Apis mellifera) no Brasil em 1839, quando o padre Antônio Carneiro trouxe colônias de Portugal para o Rio de Janeiro. Apesar de apenas sete colônias de Portugal sobreviverem à viagem, elas foram instaladas na praia Formosa, no Rio de Janeiro, marcando o início da apicultura no país.
          Posteriormente, entre 1845 e 1880, imigrantes alemães e italianos introduziram outras subespécies de Apis mellifera nas regiões Sul e Sudeste do Brasil, contribuindo para a disseminação da apicultura nessas áreas.
          Em Içara, destaca-se como a “Capital Catarinense do Mel”, graças à dedicação de apicultores locais que, ao longo das décadas, contribuíram para o crescimento e reconhecimento da atividade na região.
          Além de que, em Santa Catarina, a apicultura se desenvolveu significativamente, tornando o estado um referência na produção de mel orgânico e sustentável.
          Atualmente, há mais de 9 mil apicultores espalhados pelo estados, beneficiados por fatores naturais que favorecem a produção de mel de alta qualidade.

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
        <SobreTitle>Por que Içara ficou conhecida como a “Capital Catarinense do Mel”? </SobreTitle>
        <Divider />
        <SobreText>
            Içara ficou conhecida como “Capital Catarinense do Mel” devido à longa tradição e dedicação dos apicultores locais, que, ao longo das décadas, desenvolveram e fortaleceram a atividade apícola na região. A região também possui características favoráveis, como a diversidade da flora apícola, que contribui para a produção de mel de alta qualidade.
            <br />
            Embora não haja um museu ou centro de interpretação específico sobre o mel, a apicultura está presente na identidade cultural e nas atividades econômicas do município. Eventos como a Agromel, que celebra a produção agrícola local, incluindo o mel, e iniciativas de empresas como a Minamel, que atua na exportação de mel, contribuem para a valorização e divulgação dessa tradição.    
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
        A apicultura em Içara não é apenas uma atividade econômica, mas um reflexo da história, da cultura e do esforço coletivo de famílias e empreendedores que, ao longo dos anos, consolidaram o município como referência na produção de mel em Santa Catarina e no Brasil. Com raízes que remontam à influência de imigrantes europeus e fortalecida por iniciativas locais como a fundação da Associação dos Apicultores de Içara (API) e o crescimento de empresas como a Minamel, a tradição apícola içarense se mantém viva e inovadora. O título de “Capital Catarinense do Mel” é mais do que simbólico: ele expressa o reconhecimento de uma comunidade que valoriza o trabalho no campo, o cuidado com o meio ambiente e a excelência na produção. Assim, a apicultura segue sendo não só um pilar econômico, mas também um motivo de orgulho para Içara e seus moradores.
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

export default Agromel;