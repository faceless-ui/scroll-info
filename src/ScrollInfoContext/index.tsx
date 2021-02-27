import { createContext } from 'react';
import { IScrollInfoContext } from './types';

const ScrollInfoContext = createContext<IScrollInfoContext>({} as IScrollInfoContext);

export default ScrollInfoContext;
