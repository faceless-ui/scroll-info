import { useContext } from 'react';
import ScrollInfoContext from '../ScrollInfoContext';
import { IScrollInfoContext } from '../ScrollInfoContext/types';

const useScrollInfo = (): IScrollInfoContext => useContext(ScrollInfoContext);

export default useScrollInfo;
