import css from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  <>
    <button type="button" className={css.button} onLoadMore={onLoadMore}>
      Load more
    </button>
  </>;
};
