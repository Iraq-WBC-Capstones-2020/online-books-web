import React from 'react';

function Paragraph({ title, className, children }) {
  return (
    <>
      <p
        className={`text-3xl font-medium border-b-4 inline border-blue-500 ${className}`}
      >
        {title}
      </p>
      <p className={`text-base leading-loose text-justify ${className}`}>
        {children}
      </p>
    </>
  );
}

export default Paragraph;
