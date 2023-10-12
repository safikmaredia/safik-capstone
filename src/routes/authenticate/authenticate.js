import SignUpForm from '../../components/signin/signin';
import SignInForm from '../../components/signup/signup';

import './authenticate.scss';

const validation = () => {
  return (
    <div className='validation-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default validation;