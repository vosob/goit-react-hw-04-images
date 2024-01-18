import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import fetchImages from 'api/api';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    modalImage: '',
    isLoading: false,
    showModal: false,
    imageAlt: '',
  };

  async componentDidUpdate(_, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ isLoading: true });
      try {
        const q = await fetchImages(nextName, this.state.page);

        this.setState(prevState => ({
          images: [...prevState.images, ...q.hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearchSubmit = query => {
    if (!query.trim()) {
      toast.warning('Please enter a search request.');
      return;
    }

    this.setState({ query, images: [] });
  };

  handleModalImage = imageUrl => {
    this.setState({ modalImage: imageUrl });
  };

  handleModalAlt = event => {
    this.setState({ imageAlt: event });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, modalImage, showModal, imageAlt, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery
            showModal={this.toggleModal}
            images={images}
            handleModalImage={this.handleModalImage}
            handleModalAlt={this.handleModalAlt}
          />
        )}
        {images.length > 1 && <Button onClick={this.loadMoreImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={imageAlt} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
        {isLoading && <Loader />}
      </>
    );
  }
}
export default App;
