import React from 'react';
import { Helmet } from "react-helmet";
import NotFoundPage from "./NotFoundPage";
import { Container,  } from 'react-bootstrap';

function GarageRollerPage() {
 

return (
    <main className='gates-page'>

      <Helmet>
        <meta name="description"
          content="Explore our range of garage roller doors. 
          Experience easy access, enhanced security, and space-saving design."
        />
        <meta name="keywords" 
	        content="garage roller doors, roller garage doors, garage door features, secure garage doors, space-saving doors" />
        <title>Garage roller doors</title>
        <link rel="canonical" href="https://osatechno.com/garageroller" />
      </Helmet>

      <Container >
        <p>Sorry, this page is under development.</p>
        <p>We are actively working on improving it and will soon present the full content.</p>
        <p>Thank you for your understanding and patience.</p>
        <p>Please come back later to view the updated version of this page.</p>


      </Container>
      <NotFoundPage />
    </main>	    
  );
}
export default GarageRollerPage;