import axios from 'axios';

const API_KEY = '38118761-5c53bea8af45b7f3b182c00e5';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const getImageByQuery = async params => {
  const { data } = await axios({
    params: {
      key: API_KEY,
      ...params,
    },
  });

  const response = data.hits.map(item => {
    return {
      id: item.id,
      webformatURL: item.webformatURL,
      largeImageURL: item.largeImageURL,
    };
  });
  return response;
};
