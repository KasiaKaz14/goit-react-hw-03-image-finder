import css from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <div className={css.buttonContainer} onClick={onLoadMore}>
      <button type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
};
