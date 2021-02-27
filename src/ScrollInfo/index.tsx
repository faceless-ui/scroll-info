import useScrollInfo from '../useScrollInfo';

const ScrollInfo: React.FC = (props) => {
  const { children } = props;
  const scrollInfo = useScrollInfo();
  if (children) {
    if (typeof children === 'function') return children(scrollInfo);
    return children;
  }
  return null;
};

export default ScrollInfo;
