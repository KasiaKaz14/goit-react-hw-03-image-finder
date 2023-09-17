import css from './Button.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <div className={css.button_container} onClick={handleLoadMore}>
      <button type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
};
