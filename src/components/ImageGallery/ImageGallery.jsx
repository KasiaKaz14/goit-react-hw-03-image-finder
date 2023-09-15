import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ id, webformatURL, images }) => {
  return (
    <ul className={css.gallery}>
      <li key={id}>{images}</li>
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
