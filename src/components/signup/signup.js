import React, { useState } from 'react';

import FormInput from '../form/form';
import Button from '../button-component/button-component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './signup.scss';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const resetFormFields = () => {
    setFormFields({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formFields.password !== formFields.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );

      await createUserDocumentFromAuth(user, { displayName: formFields.displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Your Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={formFields.displayName}
        />

        <FormInput
          label='Your Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={formFields.email}
        />

        <FormInput
          label='Choose a Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={formFields.password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={formFields.confirmPassword}
        />

        <Button type='submit'>Create Account</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
