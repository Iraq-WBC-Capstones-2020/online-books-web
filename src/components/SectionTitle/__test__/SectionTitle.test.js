import React from 'react';
import { render } from '@testing-library/react';
import SectionTitle from '../SectionTitle';

test('renders SectionTitle', () => {
  const title = 'Title';
  const { getByText } = render(<SectionTitle>{title}</SectionTitle>);
  const titleTextElement = getByText(/Title/i);
  expect(titleTextElement).toBeInTheDocument();
});
