


import React, { useState } from 'react';

import FormInput from '../form/form';
import Button from '../button-component/button-component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './signin.scss';

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields({
      email: '',
      password: '',
    });
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case 'auth/wrong-password':
        alert('Incorrect password for the email provided.');
        break;
      case 'auth/user-not-found':
        alert('No user found with this email.');
        break;
      default:
        console.error(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={formFields.email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={formFields.password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={handleGoogleSignIn}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
