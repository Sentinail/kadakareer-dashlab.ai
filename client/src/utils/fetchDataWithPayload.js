import axios from 'axios';

const fetchDataWithPayload = async ({ url, method = 'get', payload }) => {
  try {
    const axiosConfig = {
      method,
      url,
      data: payload,
    };

    const response = await axios(axiosConfig);

    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDataWithPayload;
