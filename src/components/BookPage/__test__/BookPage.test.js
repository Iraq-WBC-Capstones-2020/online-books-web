import React from 'react';
import renderer from 'react-test-renderer';
import BookPage from './../BookPage';

test('BookPage snapshot', () => {
  const tree = renderer.create(<BookPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
