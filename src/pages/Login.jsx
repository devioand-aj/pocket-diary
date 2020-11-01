import React, { useContext } from 'react';
import * as Yup from 'yup';

import Form from '../components/common/Form';
import FormField from '../components/FormField';
import FormButton from '../components/FormButton';
import UserContext from '../context/user/userContext';
import Toast from '../components/common/Toast';
import Spinner from '../components/common/NewSpinner';
import { setTokenToLocalStorage, getJwtDecode } from '../services/auth';
import Button from '../components/common/Button';
import spinner from '../assets/spinner-light-small.svg';
import '../styles/login.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

const Login = ({ history }) => {
  const { toast, isToast, onRemoveToast, onLoginUser, loading } = useContext(
    UserContext
  );

  const handleSubmit = async (values) => {
    const token = await onLoginUser(values);
    if (!token) return;

    setTokenToLocalStorage(token);
    const { user } = getJwtDecode(token);
    return history.push(`/user/${user.id}`);
  };

  return (
    <div className='login'>
      <div className='login-header'>
        <h1>Contact Keeper</h1>
      </div>
      <div className='login-body'>
        <div className='formLogin'>
          <h1 className='form-label'>Login</h1>
          <Toast message={toast} visible={isToast} onClick={onRemoveToast} />
          <Spinner Item={spinner} visible={loading} />
          <Form
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <FormField name='email' placeholder='Email' />
            <FormField name='password' type='password' placeholder='Password' />
            <FormButton label='Login' />
            <Button
              label='Register'
              onClick={() => {
                if (isToast) onRemoveToast();
                return history.push('/register');
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
