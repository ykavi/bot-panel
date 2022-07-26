import { useEffect, useState } from 'react';


const useGetLocalStorage = () => {
  const [products, setProducts] = useState(null);
  const [baskets, setBaskets] = useState(null);

  useEffect(() => {
    const productsData = getLocalStorage(L);
    const basketsData = getLocalStorage();
    setProducts(productsData);
    setBaskets(basketsData);
  }, []);

  return { products, baskets };
};

export default useGetLocalStorage;
