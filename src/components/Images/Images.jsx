import axios from 'axios';

export const fetchImages = async (image, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${image}&page=${page}&key=38253107-b25581e8f8d05da09cf98b2cc&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
