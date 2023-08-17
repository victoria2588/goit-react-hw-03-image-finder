import style from './ImagesNotFound.module.css';

export const ImageNotFound = ({ query, dataLength, isLoading }) => {
  if (dataLength === 0 && !isLoading && query.trim() !== '') {
    return <h2 className={style.imagenotfound__header}>Images not found</h2>;
  }
};
