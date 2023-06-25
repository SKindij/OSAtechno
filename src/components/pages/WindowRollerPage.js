import React from 'react';
import { Helmet } from "react-helmet";
import NotFoundPage from "./NotFoundPage";

function WindowRollerPage() {
 

return (
    <main>
      <Helmet>
        <meta name="description"
          content="Discover our selection of window roller shutters. 
          Enjoy privacy, insulation, and noise reduction. 
          Enhance the energy efficiency of your home or office."
        />
        <meta name="keywords" 
	        content="window roller shutters, window shutters, privacy solutions, energy-efficient windows, noise reduction" />
        <title>Window roller shutters</title>
        <link rel="canonical" href="https://osatechno.com/residential" />
      </Helmet>
       <NotFoundPage />
    </main>	  
  );
}


export default WindowRollerPage;