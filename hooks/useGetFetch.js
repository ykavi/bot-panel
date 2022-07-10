import { useEffect, useState } from 'react';
import { URL } from '@enums';

const useGetFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${URL}/${endPoint}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(`useGetFetch error: ${error}`);
      });
  }, []);

  return { data, loading, error };
};

export default useGetFetch;
