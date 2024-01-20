import { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import fetchImages from 'api/api';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoadMoreImages, setIsLoadMoreImages] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSearchSubmit = query => {
    if (!query.trim()) {
      toast.warning('Please enter a search request.');
      return;
    }
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  const loadMoreImages = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const q = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...q.hits]);
        setIsLoadMoreImages(page < Math.ceil(q.totalHits / 12));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query, page);
  }, [query, page]);

  return (
    <>
      <Searchbar onSubmit={handleSearchSubmit} />
      {images.length > 0 && (
        <ImageGallery showModal={handleImageClick} images={images} />
      )}
      {isLoadMoreImages && images.length > 0 && (
        <Button onClick={loadMoreImages} />
      )}
      {showModal && (
        <Modal onClose={handleCloseModal} imageUrl={selectedImage} />
      )}
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
