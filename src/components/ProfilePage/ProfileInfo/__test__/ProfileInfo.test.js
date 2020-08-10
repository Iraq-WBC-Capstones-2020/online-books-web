import React from 'react';
import renderer from 'react-test-renderer';
import ProfileInfo from '../ProfileInfo';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
test('ProfileInfo snapshot', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
  }));
  const history = createMemoryHistory();
  const profileInfo = {
    id: '120147514545',
    name: 'Sara Ahmed',
    email: 'sara@eample.com',
    img: 'https://via.placeholder.com/300x300',
    gender: 'Female',
    joined: 886280400000,
    birthday: 886291200000,
    phoneNumber: '07154245455',
    address: {
      street: 'Middle Erbil',
      city: 'Erbil',
      country: 'Iraq',
    },
  };
  const tree = renderer
    .create(
      <Router history={history}>
        <ProfileInfo profileInfo={profileInfo} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
