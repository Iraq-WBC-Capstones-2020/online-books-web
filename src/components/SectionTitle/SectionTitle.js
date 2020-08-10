import React from 'react';

function SectionTitle({ children }) {
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl font-medium inline border-b border-gray-400 px-5">
        {children}
      </h1>
    </div>
  );
}

export default SectionTitle;
