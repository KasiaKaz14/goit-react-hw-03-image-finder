import PropTypes from 'prop-types';
import React from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleFormSubmit, imageItem, handleChange }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageItem"
          value={imageItem}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
