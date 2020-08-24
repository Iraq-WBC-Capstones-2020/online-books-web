import React from 'react';

function Paragraph({ title, className, children }) {
  return (
    <>
      <p
        className={`text-3xl font-medium border-b-4 inline border-blue-500 ${
          className || ''
        }`.trim()}
      >
        {title}
      </p>
      <p
        className={`text-base leading-loose text-justify break-words ${
          className || ''
        }`.trim()}
      >
        {children}
      </p>
    </>
  );
}

export default Paragraph;
