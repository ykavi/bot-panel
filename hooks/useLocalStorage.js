import { useEffect, useState } from 'react';
import { getLocalStorage } from '@helpers';
import { LOCAL_STORAGE_KEYS } from '@enums';

const useGetLocalStorage = () => {
  const [products, setProducts] = useState(null);
  const [baskets, setBaskets] = useState(null);

  useEffect(() => {
    const productsData = getLocalStorage(LOCAL_STORAGE_KEYS.PRODUCTS);
    const basketsData = getLocalStorage(LOCAL_STORAGE_KEYS.BASKETS);
    console.log('productsData', productsData);
    setProducts(productsData);
    setBaskets(basketsData);
  }, []);

  return { products, baskets };
};

export default useGetLocalStorage;
