import { useContext } from 'react';
import ScrollInfoContext, { IScrollInfoContext } from '../ScrollInfoProvider/context.js';

const useScrollInfo = (): IScrollInfoContext => useContext(ScrollInfoContext);

export default useScrollInfo;
