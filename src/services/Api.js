import axios from 'axios';

const API_KEY = '33772053-27567f6e35609c7f2c2f0645c';
const BASE_URL = 'https://pixabay.com/api/?';

export const fetchImage = async (querySearch, page) => {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: querySearch,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
      page,
    },
  });

  return response.data;
};
