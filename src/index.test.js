import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockWindowScrollEvents, mockRequestAnimationFrame } from '@trbl/utils';

configure({ adapter: new Adapter() });

mockWindowScrollEvents({
  scrollArea: [2483, 5000],
});

mockRequestAnimationFrame();
