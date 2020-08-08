import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from '../Paragraph';

test('renders Paragraph', () => {
    const title = "Title";
    const paragraph= "Paragraph";
  const { getByText } = render(<Paragraph title={title} >{paragraph}</Paragraph>);
  const titleTextElement = getByText(/Title/i);
  const paragraphTextElement = getByText(/Paragraph/i);
  expect(titleTextElement).toBeInTheDocument();
  expect(paragraphTextElement).toBeInTheDocument();
});
