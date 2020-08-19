import React from 'react';
import renderer from 'react-test-renderer';
import SocialMediaButtons from './../SocialMediaButtons';

test('SocialMediaButtons snapshot', () => {
  const tree = renderer.create(<SocialMediaButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
