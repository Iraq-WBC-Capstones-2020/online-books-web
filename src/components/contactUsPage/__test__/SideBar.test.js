import React from 'react';
import renderer from 'react-test-renderer';
import ContactInformation from './../SideBar';

test('SideBar snapshot', () => {
  const tree = renderer.create(<ContactInformation />).toJSON();
  expect(tree).toMatchSnapshot();
});
