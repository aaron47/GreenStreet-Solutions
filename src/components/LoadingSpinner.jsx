const LoadingSpinner = () => {
  return (
    <div
      className="site-loader w-screen h-screen"
      style={{ backgroundColor: '#010101' }}
    >
      <span></span>
      <p>Loading GreenStreet.exe</p>
    </div>
  );
};

export default LoadingSpinner;
