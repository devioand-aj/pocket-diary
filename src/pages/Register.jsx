import React, { useContext } from 'react';
import * as Yup from 'yup';

import Form from '../components/common/Form';
import FormField from '../components/FormField';
import FormButton from '../components/FormButton';
import UserContext from '../context/user/userContext';
import Toast from '../components/common/Toast';
import Spinner from '../components/common/NewSpinner';
import { setTokenToLocalStorage, getJwtDecode } from '../services/auth';
import spinner from '../assets/spinner-light-small.svg';
import Button from '../components/common/Button';
import '../styles/login.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

const Register = ({ history }) => {
  const { toast, isToast, onRemoveToast, loading, onRegisterUser } = useContext(
    UserContext
  );

  const handleSubmit = async (values) => {
    const token = await onRegisterUser(values);

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
          <h1 className='form-label'>Register</h1>
          <Toast message={toast} visible={isToast} onClick={onRemoveToast} />
          {/* <Spinner visible={loading} /> */}
          <Spinner Item={spinner} visible={loading} />
          <Form
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm({ values: '' });
            }}
            validationSchema={validationSchema}
          >
            <FormField name='name' placeholder='Name' />
            <FormField name='email' placeholder='Email' />
            <FormField type='password' name='password' placeholder='Password' />
            <FormButton label='Register' />
            <Button
              label='Login'
              onClick={() => {
                if (isToast) onRemoveToast();
                return history.push('/');
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
