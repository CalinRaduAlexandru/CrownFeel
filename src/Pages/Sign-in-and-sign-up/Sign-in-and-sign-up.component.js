import React from 'react';
import './Sign-in-and-sign-up.styles.scss';
import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SingUp.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;
