import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, id, images }) => (
  <>
    {images.map(({ id, webformatURL }) => (
      <li className={css.galleryItem} key={id}>
        <a href={webformatURL} target="_blank" rel="norefferer noopener">
          <img src={webformatURL} alt="" />
        </a>
      </li>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
