import axios from 'axios';
import { setLoading, setCats, setError } from './catsSlice';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchCats =
  (page, limit = 5, order = 'asc', apiKey) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(API_URL, {
        params: { page, limit, order, api_key: apiKey },
      });
      dispatch(setCats(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
