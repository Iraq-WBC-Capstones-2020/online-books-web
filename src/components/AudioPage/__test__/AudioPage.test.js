import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayerPage from '../AudioPagePlayer';

test('AudioPage snapshot', () => {
  const tree = renderer.create(<AudioPlayerPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
