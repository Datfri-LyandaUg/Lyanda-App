import axios from 'axios';
import { Alert } from 'react-native';

axios.interceptors.response.use(null, error => {
  const ExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!ExpectedError) {

    Alert.alert(
      'Server Currently unavailable.',
    );
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};