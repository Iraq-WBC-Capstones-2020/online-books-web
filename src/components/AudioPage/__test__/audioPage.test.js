import React from 'react';
import renderer from 'react-test-renderer';
import AudioPageSection from '../AudioPage';

test('audioPage snapshot', () => {
  const tree = renderer.create(<AudioPageSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
