import React from 'react';
import { MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
} from './../../api/firebase';
import { useTranslation } from 'react-i18next';

export default function SocialMediaButtons() {
  const { t } = useTranslation();
  const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
  const signInWithGithub = () => auth.signInWithPopup(githubAuthProvider);
  const signInWithFacebook = () => auth.signInWithPopup(facebookAuthProvider);
  return (
    <MDBCol md="5" className="mt-5">
      <MDBCard className="mt-5 log z-depth-0">
        <MDBCardBody className="mx-4">
          <div className="text-center">
            <div className=" social">
              <button
                type="button"
                className="btn btn-gplus
                   btn btn-danger rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                   transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithGoogle}
              >
                <i className="fab fa-google-plus-g pr-1"></i>{' '}
                {t('socialMediaPage.signInGoogle')}
              </button>

              <br></br>
              <button
                type="button"
                className="btn btn-git
                  btn btn-grey rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                  transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithGithub}
              >
                <i className="fab fa-github pr-1"></i>{' '}
                {t('socialMediaPage.signInGithub')}
              </button>
              <br></br>

              <button
                type="button"
                className="btn btn-fb
                   btn btn-primary rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                   transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithFacebook}
              >
                <i className="fab fa-facebook-f pr-1"></i>{' '}
                {t('socialMediaPage.signInFacebook')}
              </button>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
