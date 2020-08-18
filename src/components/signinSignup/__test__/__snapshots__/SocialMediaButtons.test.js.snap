import React from 'react';
import renderer from 'react-test-renderer';
import SocialMediaButtons from './../SocialMediaButtons';

test('Clients snapshot', () => {
  const tree = renderer.create(<SocialMediaButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
