import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const IndustrialGatesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/industrial/${productId}`);
  };

  const handleReplaceClick = () => {
    navigate('/industrial', { replace: true });
  };

  return (
    <div>
      <h2>Industrial Gates</h2>
      <p>Current location: {location.pathname}</p>
      <p>Select a product:</p>
      <ul>
        <li onClick={() => handleProductClick('rd101')}>Product 101</li>
        <li onClick={() => handleProductClick('rd102')}>Product 102</li>
        <li onClick={() => handleProductClick('rd103')}>Product 103</li>
        <li onClick={() => handleProductClick('rd104')}>Product 104</li>
        <li onClick={() => handleProductClick('rd105')}>Product 105</li>
      </ul>

      <p>Go back to the previous action:</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <p>Return to the beginning of the section:</p>
      <button onClick={handleReplaceClick}>Replace</button>
    </div>
  );
};

export default IndustrialGatesPage;

