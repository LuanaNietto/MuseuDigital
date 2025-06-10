import React, {useState, useEffect, useRef} from 'react';
import { SobreSection, SobreTitle, SobreText, Overlay, Divider,
ColLeft, MiniTitle, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem} from '../styles/GlobalStyle';
import { GalleryUtils, useGalleryModal } from '../components/utils/GalleryUtils';
import { ContactFooter } from './utils/Footer';

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
        <SobreTitle>FESTA DA MELANCIA</SobreTitle>
        <Divider />
        <SobreText>
          A festa começou há mais de cinco décadas, quando os primeiros moradores da cidade se reuniram para celebrar a padroeira local, Santa Luzia. Após uma missa realizada sob uma figueira, os vizinhos compartilharam melancias, fruto abundante na região. Esse gesto de confraternização deu origem a uma tradição que perdura até hoje.
          Campo Mãe Luzia é reconhecido como o “vale das melancias” devido à sua expressiva produção da fruta. A melancia é uma fonte significativa de renda para muitas famílias da comunidade, sendo cultivada em cerca de 35 hectares. A festa celebra não apenas a colheita, mas também a identidade agrícola e cultural da região.
          
          </SobreText>
      </SobreSection>

      {GalleryUtils.renderGallery(galleryItems, openModal)}

      <SobreSection>
        <SobreTitle>Caracteríscas Marcadas</SobreTitle>
        <Divider />
        <SobreText>
         Degustação e venda de melancias: Disponibilização de melancia para consumo e comercialização.<br />
         Competições e atividades tradicionais: Pesagem de maior melancia, leilões, concursos de quem vem mais melancia, acertar o milho no balaio, Pedal da Melancia, Bailes com música ao vivo, Exposição agropecuária e cultural, Feira de artesanato e produtos locais, etc.
        </SobreText>
      </SobreSection>

      {GalleryUtils.renderGallery(galleryItems2, openModal)}
      {GalleryUtils.renderModal(modalOpen, modalImg, closeModal)}
      <ContactFooter
        id="contato"
        backgroundColor="#e1e1e1"
        textColor="#222"
      />
    </Overlay>
     
  );
}

export default FestaMelancia;