import React, { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    imageItem: '',
    page: 1,
    per_page: 12,
    id: null,
    largeImageURL: 'largeImageURL',
    page: 1,
    error: null,
    isLoading: false,
    loadMore: false,
    showModal: false,
  };

  fetchImages = async (image, page) => {
    const API_KEY = '38253107-b25581e8f8d05da09cf98b2cc';
    const BASE_URL = 'https://pixabay.com/api/';
    const response = await axios.get(
      `${BASE_URL}?q=${image}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageItem, page } = this.state;
    if (prevState.imageItem !== imageItem || prevState.page !== page) {
      this.getImages(imageItem, page);
    }
  }

  getImages = async (image, page) => {
    this.setState({ isLoading: true });
    if (!image) {
      return;
    }
    try {
      const { hits, totalHits } = await this.fetchImages(image, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      images: [],
      page: 1,
      loadMore: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, isLoading, loadMore, page, showModal, largeImageURL } =
      this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: 30,
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {loadMore && <Button onLoadMore={this.handleLoadMore} page={page} />}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
