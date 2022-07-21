import { useEffect, useState } from 'react';
import { URL } from '@enums';
import { useSelector } from 'react-redux';

const useGetFetch = (endPoint) => {
  const groupId = useSelector((store) => store.main.groupId);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${URL}/group/${groupId}/${endPoint}`)
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
