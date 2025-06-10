import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Gallery, GalleryBlock, GalleryImage, GalleryTitle,
Overlay, ModalCloseButton, ModalImage, ModalOverlay, GalleryOverlay, GalleryAuthor, GalleryDesc, GalleryOverlayContent, GalleryImageWrapper, ExpandButton, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Footer, FooterBlock} from '../styles/GlobalStyle';

import Manoel from '../img/Manoel1.jpeg';
import Nilda from '../img/Nilda1.jpeg';
import Eli from '../img/Eli 1.jpeg';
import Nega from '../img/nega 1.jpeg';
import Avo from '../img/avo.jpeg';
import Baby from '../img/baby.jpeg';
import Bebe from '../img/bebe.jpg';
import Bebe3 from '../img/bebe3.jpg';
import Bombeiro from '../img/bombeiro.jpg';
import Campo from '../img/campo.jpeg';
import Carroça from '../img/carroça.jpeg';
import Carroça2 from '../img/carroça2.jpg';
import Casa from '../img/casa.jpeg';
import Casamento from '../img/casamento.jpeg';
import Casamento2 from '../img/casamento2.jpeg';
import Casamento3 from '../img/casamento3.jpeg';
import Cavalo from '../img/cavalo.jpeg';
import Famili from '../img/familia.jpeg';
import Festa from '../img/festa.jpeg';
import Mae from '../img/mae.jpg';
import Rincao from '../img/rincao.jpg';
import Passeio from '../img/passeio.jpeg';
import Soldado from '../img/soldado.jpeg';

const galleryItems = [
  { src: Manoel, name: "Manoel", autor: "Manoel", desc: "Manoel, um dos primeiros moradores da região, sempre foi uma figura central na comunidade." },
  { src: Nilda, name: "Nilda", autor: "Nilda", desc: "Nilda, conhecida por sua hospitalidade, sempre recebeu a todos com um sorriso." },
  { src: Eli, name: "Eli", autor: "Eli", desc: "Eli, um dos primeiros pescadores da região, sempre trouxe histórias do mar." },
  { src: Nega, name: "Nega", autor: "Nega", desc: "Nega, uma figura carismática da comunidade, sempre foi conhecida por sua alegria contagiante." },
  { src: Avo, name: "Avô", autor: "Avô", desc: "Avô, sempre com uma história para contar, é a memória viva da família." },
  { src: Baby, name: "Bebê", autor: "Bebê", desc: "Bebê, a alegria da família, sempre traz um sorriso a todos." },
  { src: Bebe, name: "Bebê 2", autor: "Bebê 2", desc: "Bebê 2, sempre cheio de energia, é o orgulho da família." },
  { src: Bebe3, name: "Bebê 3", autor: "Bebê 3", desc: "Bebê 3, com seu olhar curioso, é a esperança do futuro." },
  { src: Bombeiro, name: "Bombeiro", autor: "Bombeiro", desc: "Bombeiro, sempre pronto para ajudar, é um herói da comunidade." },
  { src: Campo, name: "Campo", autor: "Campo", desc: "Campo, um lugar de paz e tranquilidade, sempre foi o refúgio da família." },
  { src: Carroça, name: "Carroça", autor: "Carroça", desc: "Carroça, símbolo do trabalho duro, sempre foi parte da vida rural." },
  { src: Carroça2, name: "Carroça 2", autor: "Carroça 2", desc: "Carroça 2, sempre carregada de histórias e memórias." },
  { src: Casa, name: "Casa ", autor: "Casa", desc: "Casa, o lar da família, sempre foi um lugar de amor e união." },
  { src: Casamento, name: "Casamento 1", autor: "Casamento 1", desc: "Casamento 1, um momento de celebração e amor, sempre lembrado com carinho." },
  { src: Casamento2, name: "Casamento 2" , autor: "Casamento 2", desc: "Casamento 2, um dia especial que uniu duas famílias." },
  { src: Casamento3, name: "Casamento 3", autor: "Casamento 3", desc: "Casamento 3, um evento que trouxe alegria e união à comunidade." },
  { src: Cavalo, name: "Cavalo", autor: "Cavalo", desc: "Cavalo, sempre fiel e companheiro, é parte da vida rural." },
  { src: Famili, name: "Familia", autor: "Familia", desc: "Familia, unida pelo amor e pelas memórias, sempre esteve presente em todos os momentos." },
  { src: Festa, name: "Festa", autor: "Festa", desc: "Festa, um momento de celebração e alegria, sempre trouxe a comunidade junta." },
  { src: Mae, name: "Mãe", autor: "Mãe", desc: "Mãe, o coração da família, sempre foi a fonte de amor e sabedoria." },
  { src: Rincao, name: "Rincão", autor: "Rincão", desc: "Rincão, um lugar de beleza natural, sempre foi o cenário perfeito para memórias." },
  { src: Passeio, name: "Passeio", autor: "Passeio", desc: "Passeio, um momento de lazer e diversão, sempre trouxe sorrisos." },
  { src: Soldado, name: "Soldado", autor: "Soldado", desc: "Soldado, sempre pronto para defender a comunidade, é um símbolo de coragem." },
];


const Memorias = () => {
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
        <SobreTitle>EXPOSIÇÃO: MEMÓRIAS</SobreTitle>
        <Divider />
        <SobreText>
          Memória é uma fração do tempo. Não apenas um registro, mas um lugar onde passado e presente se entrelaçam, uma ponte viva de lembranças que nos molda. 
          É um eco do que fomos, presente em cada imagem, gesto ou silêncio. Uma construção individual e coletiva.
          Neste espaço, reunimos fotografias que remontam o passado, enviadas pelos alunos como testemunhos do cotidiano, da família, das emoções. 
          Transformamos essas imagens em patrimônio. Registros históricos pessoais que, juntos, formam a memória coletiva da turma,
          preservando narrativas únicas para hoje e para as futuras gerações.
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

export default Memorias;