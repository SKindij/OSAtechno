import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../resources/commonImages/error.gif';

const ErrorMessage = () => {
  return (
    <img 
      style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}}
      src={img} alt="Error"
    />
  );
};

const NotFoundPage = () => {
  return (
    <div>
      <ErrorMessage/>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>Page doesn't exist</p>
      <Link
        style={{
          display: 'block', textAlign: 'center',
          fontWeight: 'bold', fontSize: '24px',
          marginTop: '30px', padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff', textDecoration: 'none',
          borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease',
        }}
        to="/"
      >Back to main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
