import React, { useEffect, useContext } from 'react';
import { BiArrowBack, BiExit } from 'react-icons/bi';
import { FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

import UserContext from '../context/user/userContext';
import ContactContext from '../context/contact/contactContext';
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from '../services/auth';
import useVerifyUser from '../hooks/useVerifyUser';
import ContactForm from '../components/ContactForm';
import ContactCards from '../components/ContactCards';
import Spinner from '../components/common/NewSpinner';
import spinner from '../assets/new-spinner.svg';
import '../styles/home.css';
// import FilterSection from '../components/FilterSection';

const Home = ({ match, history }) => {
  const {
    user: { user_id: _id, name },
    onSetUser,
    onClearUserState,
  } = useContext(UserContext);
  const { onClearContactState } = useContext(ContactContext);

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    onSetUser(token);
    // eslint-disable-next-line
  }, []);

  const isVerified = useVerifyUser(_id, match.params.id);

  const handleLogoutUser = () => {
    removeTokenFromLocalStorage();
    onClearUserState();
    onClearContactState();
    history.replace('/');
  };

  return (
    <>
      {!isVerified ? (
        <Spinner Item={spinner} style={{ marginTop: '40px' }} />
      ) : (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className='home-page'
        >
          <div className='home-header'>
            <div
              className='header-back-action'
              onClick={() => history.goBack()}
            >
              <div className='icon icon-back'>
                <BiArrowBack />
              </div>
              Back
            </div>
            <div className='header-user-paper'>
              <div className='user-auth'>
                <div className='user-icon'>
                  <FaUserCheck />
                </div>
                {name}
              </div>
            </div>
            <div className='header-logout-action' onClick={handleLogoutUser}>
              <div className='icon icon-logout'>
                <BiExit />
              </div>
              logout
            </div>
          </div>

          <div className='home-body'>
            <div className='body-form-section'>
              <div>
                <ContactForm />
              </div>
            </div>
            <div className='body-cards-section'>
              {/* <div className="contacts-action-tray">
                <FilterSection />
              </div> */}
              <div className='body-cards'>
                <ContactCards />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
