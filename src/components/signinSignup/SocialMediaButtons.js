import React from 'react';
import {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
} from './../../api/firebase';
import { useTranslation } from 'react-i18next';
import { MDBCard, MDBCardBody } from 'mdbreact';

export default function SocialMediaButtons() {
  const { t } = useTranslation();
  const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
  const signInWithGithub = () => auth.signInWithPopup(githubAuthProvider);
  const signInWithFacebook = () => auth.signInWithPopup(facebookAuthProvider);
  return (
    <MDBCard className="mt-5 log z-depth-0">
      <MDBCardBody className="mx-4">
        <div className="text-center">
          <div className="social text-white">
            <button
              type="button"
              className="btn btn-gplus btn-danger rounded-pill"
              onClick={signInWithGoogle}
            >
              <i className="fab fa-google-plus-g pr-1"></i>{' '}
              {t('socialMediaPage.signInGoogle')}
            </button>
            <br></br>
            <button
              type="button"
              className="btn btn-git btn-grey rounded-pill text-white"
              onClick={signInWithGithub}
            >
              <i className="fab fa-github pr-1 text-white"></i>{' '}
              {t('socialMediaPage.signInGithub')}
            </button>
            <br></br>
            <button
              type="button"
              className="btn btn-fb btn-primary rounded-pill"
              onClick={signInWithFacebook}
            >
              <i className="fab fa-facebook-f pr-1"></i>{' '}
              {t('socialMediaPage.signInFacebook')}
            </button>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
