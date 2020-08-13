import React from 'react';
import renderer from 'react-test-renderer';

import SearchSection from '../searchSection';

test('searchSection snapshot', () => {
  const tree = renderer.create(<SearchSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
