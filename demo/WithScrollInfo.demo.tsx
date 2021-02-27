import { withScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IScrollInfoContext } from '../src/ScrollInfoContext/types';
import LogProps from './LogProps';

type Props = {
  scrollInfo: IScrollInfoContext
}

const WithScrollInfo: React.FC<Props> = (props) => {
  const { scrollInfo } = props;
  return LogProps(scrollInfo);
};

export default withScrollInfo(WithScrollInfo);
