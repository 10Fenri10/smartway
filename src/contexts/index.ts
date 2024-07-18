import { createContext } from 'react';
import { Storage } from '../types/types';

const StoreContext = createContext<Storage | null>(null);

export default StoreContext;
