import css from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.button} onLoadMore={onLoadMore}>
      Load more
    </button>
  );
};