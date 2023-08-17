import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './ImageGallery.module.css';

export const ImageGallery = ({ data, onOpenModal }) => {
  return (
    <>
      <ul className={style.gallery}>
        {data.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              onOpenModal={onOpenModal}
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};
