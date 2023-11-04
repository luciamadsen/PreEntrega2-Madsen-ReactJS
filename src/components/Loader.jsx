import { ThreeCircles } from 'react-loader-spinner';

export const Loader = ({ loading }) => {
  const loaderStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999, 
  };

  return (
    <>
      {loading === true && (
        <div style={loaderStyles}>
          <h2>
            <ThreeCircles
              height="80"
              width="80"
              color="#C79215"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </h2>
        </div>
      )}
    </>
  );
};