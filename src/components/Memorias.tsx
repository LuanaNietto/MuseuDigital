import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Overlay, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem} from '../styles/GlobalStyle';
import { GalleryUtils, useGalleryModal } from '../components/utils/GalleryUtils';
import { ContactFooter } from './utils/Footer';

import Manoel from '../img/memorias/Manoel1.jpeg';
import Nilda from '../img/memorias/Nilda1.jpeg';
import Eli from '../img/memorias/Eli 1.jpeg';
import Nega from '../img/memorias/nega 1.jpeg';
import Avo from '../img/memorias/avo.jpeg';
import Baby from '../img/memorias/baby.jpeg';
import Bebe from '../img/memorias/bebe.jpg';
import Bebe3 from '../img/memorias/bebe3.jpg';
import Bombeiro from '../img/memorias/bombeiro.jpg';
import Campo from '../img/memorias/campo.jpeg';
import Carroça from '../img/memorias/carroça.jpeg';
import Carroça2 from '../img/memorias/carroça2.jpg';
import Casa from '../img/memorias/casa.jpeg';
import Casamento from '../img/memorias/casamento.jpeg';
import Casamento2 from '../img/memorias/casamento2.jpeg';
import Casamento3 from '../img/memorias/casamento3.jpeg';
import Cavalo from '../img/memorias/cavalo.jpeg';
import Famili from '../img/memorias/familia.jpeg';
import Festa from '../img/memorias/festa.jpeg';
import Mae from '../img/memorias/mae.jpg';
import Rincao from '../img/memorias/rincao.jpg';
import Passeio from '../img/memorias/passeio.jpeg';
import Soldado from '../img/memorias/soldado.jpeg';

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
  const { modalOpen, modalImg, openModal, closeModal } = useGalleryModal();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const refDropdown = useRef<HTMLDivElement | null>(null);
  
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
      {GalleryUtils.renderGallery(galleryItems, openModal)}
      {GalleryUtils.renderModal(modalOpen, modalImg, closeModal)}

      <ContactFooter
        id="contato"
        backgroundColor="#e1e1e1"
        textColor="#222"
      />
    </Overlay>
     
  );
}

export default Memorias;