import React from 'react';

const Spinner = () => {
  return (
    <>
      <div className="spinner-border" role="status" data-testid="spinner">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Spinner;
