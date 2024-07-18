import { useContext } from 'react';
import StoreContext from '../contexts';

const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error();
  }
  return store;
};

export default useStore;
