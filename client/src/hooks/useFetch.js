import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ({ url, method ='get', payload=null }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, payload]);

  return { data, loading, error };
};

export default useFetch;
