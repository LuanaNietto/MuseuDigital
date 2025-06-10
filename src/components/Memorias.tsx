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
import IMG06 from '../img/memorias/IMG_1006.jpg';
import IMG07 from '../img/memorias/IMG_1007.jpg';
import IMG08 from '../img/memorias/IMG_1008.jpg';
import IMG09 from '../img/memorias/IMG_1009.jpg';
import IMG10 from '../img/memorias/IMG_1010.jpg';
import IMG11 from '../img/memorias/IMG_1011.jpg';

const galleryItems = [
  { src: Manoel, name: "", autor: "Isadora", desc: "Bisavô da aluna Isadora" },
  { src: Nilda, name: "", autor: "Isadora", desc: "Bisavó da aluna Isadora" },
  { src: Eli, name: "", autor: "Isadora", desc: "Foto do acervo pessoal da aluna Isadora" },
  { src: Nega, name: "", autor: "Isadora", desc: "Foto do acervo pessoal da aluna Isadora" },
  { src: Avo, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Baby, name: "", autor: "", desc: "" },
  { src: Bebe, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini" },
  { src: Bebe3, name: "", autor: "Karen", desc: "Foto do acervo pessoal de Karen"},
  { src: Bombeiro, name: "Bombeiro", autor: "Bombeiro", desc: "Bombeiro, sempre pronto para ajudar, é um herói da comunidade." },
  { src: Campo, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Carroça, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Carroça2, name: "", autor: "", desc: "" },
  { src: Casa, name: " ", autor: "", desc: "" },
  { src: Casamento, name: "", autor: "", desc: "" },
  { src: Casamento2, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Casamento3, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Cavalo, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Famili, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: Festa, name: "", autor: "", desc: "" },
  { src: Mae, name: "", autor: "", desc: "" },
  { src: Rincao, name: "Rincão - antes e depois", autor: "Mariane", desc: "Foto do acervo pessoal de Mariane" },
  { src: Passeio, name: "", autor: "Gustavo Mendes", desc: "Minha primeira vez no Beto Carrero foi em 2012, com minha família." },
  { src: Soldado, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG06, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG07, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG08, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG09, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG10, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
  { src: IMG11, name: "", autor: "Emanuelly Filipini", desc: "Foto do acervo pessoal de Emanuelly Filipini"},
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
        <Divider />
        <SobreText style={{ fontSize: "1em", lineHeight: "1.6" }}><strong>
          Fotos do acervo pessoal da turma 202. Uma coleção de vivências e histórias de içara e região.
          </strong>
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