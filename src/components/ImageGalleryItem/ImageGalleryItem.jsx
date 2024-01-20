import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, showModal }) => {
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={css.ImageGalleryItem__img}
          onClick={() => showModal(image.largeImageURL)}
        />
      </li>
    </>
  );
};
export default ImageGalleryItem;
