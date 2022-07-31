import { useEffect, useState } from 'react';
import { URL } from '@enums';
import { useSelector } from 'react-redux';

const useMenuItemPostFetch = (endPoint, body) => {
  const groupId = useSelector((store) => store.main.groupId);

  const [isSuccess, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!body) return;

    fetch(`${URL}/group/${groupId}/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setSuccess(res.success);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`useMenuItemPostFetch error: ${error}`);
        setError(true);
        setLoading(false);
      });
  }, [endPoint, groupId, body]);

  return { isSuccess, loading, error };
};

export default useMenuItemPostFetch;
