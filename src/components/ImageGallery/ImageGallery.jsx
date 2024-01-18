import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './imageGallery.module.css';

const ImageGallery = ({
  images,
  showModal,
  handleModalAlt,
  handleModalImage,
}) => {
  // if (images.length === 0) {
  //   return <p>No images to display.</p>;
  // }
  return (
    <div>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem
          images={images}
          showModal={showModal}
          handleModalImage={handleModalImage}
          handleModalAlt={handleModalAlt}
        />
      </ul>
    </div>
  );
};
export default ImageGallery;
