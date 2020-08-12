import React from 'react';
import renderer from 'react-test-renderer';
import TeamMembersInformation from './../Team';

test('Team snapshot', () => {
  const tree = renderer.create(<TeamMembersInformation />).toJSON();
  expect(tree).toMatchSnapshot();
});
