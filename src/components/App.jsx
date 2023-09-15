import React, { Component } from 'react';
import { Loader } from './Loader/Loader';
import { OnSubmit } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      id: '',
      webformatURL: [],
      largeImageURL: '',
      page: 1,
      isLoading: false,
      showModal: false,
      searchQuery: '',
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleSearch = query => {
    this.setState(
      {
        searchQuery: query,
        page: 1,
        images: [],
      },
      () => {
        this.fetchImages();
      }
    );
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38253107-b25581e8f8d05da09cf98b2cc&imagetype=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = imageUrl => {
    this.setState({
      largeImageURL: imageUrl,
      showModal: true,
    });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  handleKeyPress = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };

  render() {
    const { images, largeImageURL, isLoading, showModal, id } = this.state;
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
        <OnSubmit onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            webformatURL={image.webformatURL}
            onImageClick={this.handleImageClick}
          />
        ))}
        {isLoading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {showModal && (
          <Modal imageUrl={largeImageURL} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}
