import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, onOpenModal }) => {
  return (
    <>
      <ul>
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
