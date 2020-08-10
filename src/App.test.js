import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('Snapshot test App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
