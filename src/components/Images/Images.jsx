import axios from 'axios';

export const fetchImages = async (image, page) => {
  const API_KEY = '38253107-b25581e8f8d05da09cf98b2cc';
  const BASE_URL = 'https://pixabay.com/api/';
  const response = await axios.get(
    `${BASE_URL}?q=${image}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};
