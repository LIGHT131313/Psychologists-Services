import { ThreeDots } from 'react-loader-spinner';
import { theme } from 'theme';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      visible={true}
      color={`${theme.colors.input}`}
    />
  );
};
