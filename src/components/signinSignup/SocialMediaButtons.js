import React from 'react';
<<<<<<< HEAD
import { MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
} from './../../api/firebase';
import { useTranslation } from 'react-i18next';
=======
import { MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';
>>>>>>> 93782ef8e7bcf6b4342a3a2d08384808ef6ca274

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
            <div className=" social text-white">
              <button
                type="button"
                className="btn btn-gplus
<<<<<<< HEAD
                   btn btn-danger rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                   transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithGoogle}
              >
                <i className="fab fa-google-plus-g pr-1"></i>{' '}
                {t('socialMediaPage.signInGoogle')}
=======

             btn btn-danger rounded-pill"
              >
                <i className="fab fa-google-plus-g pr-1"></i>
                Login with Google
>>>>>>> 93782ef8e7bcf6b4342a3a2d08384808ef6ca274
              </button>
              <br></br>
              <button
                type="button"
                className="btn btn-git
<<<<<<< HEAD
                  btn btn-grey rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                  transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithGithub}
              >
                <i className="fab fa-github pr-1"></i>{' '}
                {t('socialMediaPage.signInGithub')}
=======
                        btn btn-grey rounded-pill text-white"
              >
                <i className="fab fa-github pr-1 text-white "></i> Login with
                Github...
>>>>>>> 93782ef8e7bcf6b4342a3a2d08384808ef6ca274
              </button>
              <br></br>

              <button
                type="button"
                className="btn btn-fb
<<<<<<< HEAD
                   btn btn-primary rounded-pill z-depth-0 animate transition duration-500 ease-in-out  
                   transform hover:-translate-y-1 hover:scale-110"
                onClick={signInWithFacebook}
              >
                <i className="fab fa-facebook-f pr-1"></i>{' '}
                {t('socialMediaPage.signInFacebook')}
=======
                 btn btn-primary rounded-pill"
              >
                <i className="fab fa-facebook-f pr-1"></i>
                Login with Facebook
>>>>>>> 93782ef8e7bcf6b4342a3a2d08384808ef6ca274
              </button>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
