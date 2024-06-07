import { useContext } from 'react';
import { ScrollInfoContext, IScrollInfoContext } from '../ScrollInfoProvider/context.js';

export const useScrollInfo = (): IScrollInfoContext => useContext(ScrollInfoContext);
