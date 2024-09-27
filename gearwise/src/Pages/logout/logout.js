import React from 'react';
import { logout } from './services/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logged out');
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
