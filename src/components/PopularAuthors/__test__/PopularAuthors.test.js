import React from 'react';
import renderer from 'react-test-renderer';
import Author from './../PopularAuthors';

test('PopularAuthors snapshot', () => {
  const tree = renderer.create(<Author authors={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
