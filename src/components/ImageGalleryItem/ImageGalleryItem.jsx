export const ImageGalleryItem = ({ id, webformatURL, onOpenModal }) => {
  return (
    <li onClick={onOpenModal} data-id={id}>
      <img src={webformatURL} alt="" />
    </li>
  );
};
