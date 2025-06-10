import React from "react";
import { Featurette, FeaturetteImg, FeaturetteText, FeaturetteButton } from "../styles/GlobalStyle";

type AcervoProps = {
  src: string;
  nome: string;
  descricao: string;
  link: string;
  invert?: boolean;
};

export const AcervoFeaturette: React.FC<AcervoProps> = ({ src, nome, descricao, link, invert }) => (
  <Featurette invert={invert}>
    <FeaturetteImg src={src} alt={nome} />
    <FeaturetteText>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <FeaturetteButton href={link} target="_blank">Ver detalhes</FeaturetteButton>
    </FeaturetteText>
  </Featurette>
);