import React from 'react';
import renderer from 'react-test-renderer';
import Author from './../PopularAuthors';

test('PopularAuthors snapshot', () => {
  const tree = renderer.create(<Author />).toJSON();
  expect(tree).toMatchSnapshot();
});
