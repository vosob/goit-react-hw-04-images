import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './imageGallery.module.css';

const ImageGallery = ({ images, showModal }) => {
  if (images.length === 0) {
    return <p>No images to display.</p>;
  }
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map((image, i) => (
          <ImageGalleryItem
            key={image.id + i}
            showModal={showModal}
            image={image}
          />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
