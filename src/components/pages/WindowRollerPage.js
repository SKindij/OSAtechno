import React from 'react';
import { Helmet } from "react-helmet";
import NotFoundPage from "./NotFoundPage";
import { Container,  } from 'react-bootstrap';

function WindowRollerPage() {
 

return (
    <main className='gates-page'>

      <Helmet>
        <meta name="description"
          content="Discover our selection of window roller shutters. 
          Enjoy privacy, insulation, and noise reduction. 
          Enhance the energy efficiency of your home or office."
        />
        <meta name="keywords" 
	        content="window roller shutters, window shutters, privacy solutions, energy-efficient windows, noise reduction" />
        <title>Window roller shutters</title>
        <link rel="canonical" href="https://osatechno.com/windowroller" />
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


export default WindowRollerPage;