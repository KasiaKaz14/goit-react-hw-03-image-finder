import PropTypes from 'prop-types';
import React from 'react';
import css from './Searchbar.module.css';

export const OnSubmit = ({ onSubmit, id }) => (
  <>
    <header className={css.searchbar}>
      <form className={css.form}>
        <button type="submit" className={css.button} onSubmit={onSubmit}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name={id}
        />
      </form>
    </header>
  </>
);

OnSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
