import React, { useContext } from 'react';
import * as Yup from 'yup';

import Form from '../components/common/Form';
import FormField from '../components/FormField';
import FormRadio from '../components/FormRadio';
import FormButton from '../components/FormButton';
import ContactContext from '../context/contact/contactContext';
// import '../styles/home.css';
import '../styles/contactForm.css';
import { useEffect } from 'react';

const radiodata = [
  {
    label: 'Personal',
    value: 'personal',
  },
  {
    label: 'Professional',
    value: 'professional',
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  phone: Yup.string().required().min(6).label('Phone'),
  type: Yup.string().required().label('Type'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const {
    isUpdate,
    initialContactFormValues,
    onSetInitialContactFormValues,
    onAddContact,
    onUpdateContact,
  } = useContext(ContactContext);

  useEffect(() => {
    onSetInitialContactFormValues(initalValues);
    // eslint-disable-next-line
  }, []);

  const initalValues = {
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  };

  const handleFormSubmit = (values) => {
    onSetInitialContactFormValues(initialValues);

    if (!isUpdate) return onAddContact(values);

    onUpdateContact(values);
  };

  return (
    <div className='formm'>
      <h1 className='form-label'>Add Contacts </h1>
      <Form
        initialValues={initialContactFormValues}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm({ values: '' });
        }}
        validationSchema={validationSchema}
      >
        <FormField name='name' placeholder='Name' />
        <FormField name='email' placeholder='Email' />
        <FormField name='phone' placeholder='Phone' />
        <FormRadio name='type' data={radiodata} />
        <FormButton label={isUpdate ? 'Update' : 'Add'} />
      </Form>
    </div>
  );
};

export default ContactForm;
