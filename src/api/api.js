import axios from 'axios';

const API_KEY = '39347211-5080f64175fc5e961a62f5c8b';
const BASE_URL = 'https://pixabay.com/api';

async function fetchImages(query, page) {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;

  const { data } = await axios.get(url);

  return data;
}

export default fetchImages;
