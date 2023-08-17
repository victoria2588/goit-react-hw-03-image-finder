import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <div className="wrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        visible={isLoading}
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
