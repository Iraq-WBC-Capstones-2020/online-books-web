import React from 'react';

function Paragraph ({ title, children }) {
  return (
    <>
      <p className="text-3xl font-medium border-b-4 inline border-blue-500">
        {title}
      </p>
      <p className="text-base leading-loose text-justify">{children}</p>
    </>
  );
};

export default Paragraph;
