import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, id, images }) => {
  <>
    {images.map(
      ({ id, webformatURL }) => `
    <li className={css.galleryItem} >
      <a href="" target="_blank" rel="norefferer noopener">
        <img src={webformatURL} alt="" key={id}/>
      </a>
    </li>
    `
    )}
  </>;
};
