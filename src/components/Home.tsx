import React, { useState, useRef, useEffect } from "react";
import {
  GlobalStyle, FullPage, ContentBox, Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem,
ColLeft, ColRight, MiniTitle, Title, AboutImg, AboutText, ConhecaContainer, ConhecaTitle, Footer, FooterBlock, Divider
} from "../styles/GlobalStyle";
import decorImg from "../img/carrossel/icara1970.jpg";

import { AcervoFeaturette } from './AcervoFeaturette';

import EsporteClube from '../img/carrossel/EsporteClubeBrasil50.jpeg';
import FestaTainha from '../img/festaTainha/img 3 - festa da tainha.png';
import Melancia from '../img/FestaMelancia/melancia.jpeg';
import Agromel from '../img/FestadoMel/images.jpeg';
import Donato from '../img/FestaSaoDonato/saodonato.jpg';


const acervoBlocks = [
  {
    src: EsporteClube,
    nome: "Memórias",
    descricao: "Neste espaço, reunimos fotografias que remontam o passado, enviadas pelos alunos como testemunhos do cotidiano, da família, das emoções. Transformamos essas imagens em patrimônio. Registros históricos pessoais que, juntos, formam a memória coletiva da turma, preservando narrativas únicas para hoje e para as futuras gerações.",
    link: "/memorias",
  },
  {
    src: Donato,
    nome: "Festa de São Donato",
    descricao: "A Festa de São Donato, celebrada anualmente em Içara, Santa Catarina, é um evento de profunda significância cultural, religiosa e econômica para a comunidade. Originada com a chegada dos imigrantes italianos no século XIX, a festa tornou-se um pilar da identidade içarense, combinando a devoção ao padroeiro com a preservação das tradições locais.",
    link: "/festasaodonato",
  },
  {
    src: FestaTainha,
    nome: "Festa da Tainha",
    descricao: "A Festa da Tainha é uma celebração tradicional que acontece no Balneário Rincão, em Santa Catarina, durante a temporada de pesca da tainha, que ocorre no inverno. Surgiu como uma forma de valorizar a cultura dos pescadores e as tradições locais ligadas ao mar. Ao longo dos anos, o evento cresceu, ganhou reconhecimento regional e passou a fazer parte do calendário turístico da cidade. Hoje, é um momento em que moradores e visitantes se reúnem para comemorar, preservar a cultura pesqueira e fortalecer os laços da comunidade.",
    link: "/festadatainha",
  },
   {
    src: Melancia,
    nome: "Festa da Melancia",
    descricao: "As memórias são pontes que ligam o presente ao passado. Elas ajudam a preservar tradições, costumes e histórias que moldam a identidade de uma comunidade. Este projeto busca destacar a importância das memórias coletivas por meio da “Festa da melancia”, um evento tradicional que faz parte da história cultural de nossa região. Com o apoio do professor de história, queremos mostrar como essa festa representa mais do que uma comemoração, ela é símbolo das vivências, das relações e das lembranças que passam de geração em geração, ajudando a manter viva a memória do nosso povo.",
    link: "/festadamelancia",
  },
  {
    src: Agromel,
    nome: "Capital do Mel",
    descricao: "A apicultura é uma atividade milenar que desempenha um papel fundamental na manutenção da biodiversidade e na produção de alimentos. Em Içara, essa prática se destaca não apenas pela quantidade, mas principalmente pela qualidade do mel produzido. Conhecido como “A Capital Catarinense do Mel”, Içara é responsável por aproximadamente 4,5% da produção estadual.",
    link: "/agromel",
  }
  
];


const Home: React.FC = () => {
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
    <>
    <FullPage>
      <ContentBox>
        <ColLeft>
          <MiniTitle>
            <Dropdown ref={refDropdown}>
              <DropdownButton onClick={() => setDropdownOpen(o => !o)}>
                Menu <span style={{
                  display: "inline-block",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform .2s"
                }}>▼</span>
              </DropdownButton>
              <DropdownMenu open={dropdownOpen}>
                <DropdownMenuItem>
                  <a href="#acervo">Acervo</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#contato">Contato</a>
                </DropdownMenuItem>
              </DropdownMenu>
            </Dropdown>
          </MiniTitle>
        </ColLeft>
        <ColRight>  
          <Title>/ MUSEU DIGITAL - IÇARA</Title>
        </ColRight>
      </ContentBox>
      <ContentBox>  
        <ColLeft>  
          <AboutText>
            Os museus são espaços fundamentais para a preservação da memória e da cultura, pois funcionam como guardiões do patrimônio material e imaterial, conectando passado, presente e futuro. Desde a Grécia antiga, o museu (ou “mouseion”, templo das musas)  representa esse vínculo com a memória, fundamentando nossa compreensão de quem somos. No contexto contemporâneo, assumem papel ativo na educação, na construção identitária e na valorização da diversidade cultural
            A cidade de Içara carece hoje de um espaço físico museológico que registre e valorize seu patrimônio cultural. Nesse contexto, a turma 202, orientada pelo prof. Natan de Oliveira Rezende e a desenvolvedora Luana Nietto, desenvolveram esse museu digital, um ambiente virtual que preserva e torna acessível os elementos materiais (objetos, festas, ícones locais) e imateriais (tradições, histórias, sentidos) que compõem a identidade da comunidade. Cada grupo de alunos investigou temas centrais da cultura içarense: Festa da Tainha, Festa de São Donato, Capital do Mel (homenagem à produção local) e Festa da Melancia, reunindo memórias, imagens e narrativas em um acervo virtual colaborativo e dinâmico.
          </AboutText>
        </ColLeft>
        <ColRight>
          <AboutImg src={decorImg} alt="Peças de decoração" />
        </ColRight>
      </ContentBox>
    </FullPage>
    {/* CONHEÇA NOSSO ACERVO */}
    <ConhecaContainer id="acervo">
      <Divider />
      <ConhecaTitle>Conheça nosso acervo </ConhecaTitle>
        {acervoBlocks.map((bloco, i) => (
            <AcervoFeaturette
              key={bloco.link}
              src={bloco.src}
              nome={bloco.nome}
              descricao={bloco.descricao}
              link={bloco.link}
              invert={i % 2 === 1}
            />
          ))}

      <a href="/" style={{ marginLeft: '30px' }}> Voltar para cima </a>
    </ConhecaContainer>
    {/* CONTATO */}
    <Footer id="contato">
      <FooterBlock>
        <h2>Contato</h2>
        <p>Email: contato@museudigital.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </FooterBlock>
    </Footer>
    </>
  );
}

export default Home;