import React from 'react';

function Spinner() {
  return (
    <div className="m-auto spinner-border" role="status" data-testid="spinner">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
