import React from 'react';
import renderer from 'react-test-renderer';
import PopularAuthors from './../PopularAuthors';

test(' PopularAuthors', () => {
  const tree = renderer.create(<PopularAuthors />).toJSON();
  expect(tree).toMatchSnapshot();
});
