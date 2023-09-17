import React from 'react';
import { Component } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    imageItem: '',
  };

  handleChange = event => {
    this.setState({ imageItem: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageItem.trim() === '') {
      return alert('Type a keyword for search');
    }

    this.props.onSubmit(this.state.imageItem);
    this.setState({ imageItem: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            Search
          </button>

          <input
            className={css.input}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="imageItem"
            value={this.state.imageItem}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
