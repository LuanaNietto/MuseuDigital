import React, { useState } from 'react';
import {
  Gallery,
  GalleryBlock,
  GalleryImage,
  GalleryTitle,
  GalleryAuthor,
  GalleryDesc,
  GalleryOverlay,
  GalleryOverlayContent,
  GalleryImageWrapper,
  ExpandButton,
  ModalOverlay,
  ModalCloseButton,
  ModalImage
} from '../../styles/GlobalStyle';

interface GalleryItem {
  src: string;
  name: string;
  autor: string;
  desc: string;
}

interface ModalImage {
  src: string;
  alt: string;
}

export class GalleryUtils {
  static renderGallery(items: GalleryItem[], openModal: (src: string, name: string) => void) {
    return (
      <Gallery>
        {items.map((item, i) => (
          <GalleryBlock key={i}>
            <GalleryImageWrapper>
              <GalleryImage
                src={item.src}
                alt={item.name}
                loading="lazy"
              />
              {/* <GalleryOverlay>
                <GalleryOverlayContent>
                  <GalleryTitle>{item.name}</GalleryTitle>
                  <GalleryAuthor> {item.autor}</GalleryAuthor>
                  <GalleryDesc>{item.desc}</GalleryDesc>
                </GalleryOverlayContent>
              </GalleryOverlay> */}
              <ExpandButton 
                onClick={() => openModal(item.src, item.name)} 
                aria-label="Expandir imagem"
              >
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
    );
  }

  static renderModal(modalOpen: boolean, modalImg: ModalImage | null, closeModal: () => void) {
    if (!modalOpen || !modalImg) return null;

    return (
      <ModalOverlay onClick={closeModal}>
        <ModalCloseButton
          onClick={(e: React.MouseEvent) => { e.stopPropagation(); closeModal(); }}
          aria-label="Fechar"
          title="Fechar"
        >
          &times;
        </ModalCloseButton>
        <ModalImage
          src={modalImg.src}
          alt={modalImg.alt}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        />
      </ModalOverlay>
    );
  }
}

// Hook para gerenciar o estado do modal
export function useGalleryModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<ModalImage | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImg({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return { modalOpen, modalImg, openModal, closeModal };
}