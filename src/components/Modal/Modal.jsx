import css from './Modal.module.css';

export const Modal = ({ largeImageURL }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
