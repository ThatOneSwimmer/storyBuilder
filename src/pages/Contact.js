import React, { useContext } from 'react';
import { ReferenceDataContext } from '../ReferenceDataContext';

export function Contact() {
  const { userData } = useContext(ReferenceDataContext);

  return (
    <div className="contact-page">
      <img
        src="https://media.tenor.com/Os38-K7VHL4AAAAd/shibainu-typing.gif"
        alt="restaurant image"
        className="dog"
      />
      
      <p>Search Input: {userData && userData.myInput}</p>
      {/* checks if userData is empty and grabs the input from the search bar*/}
    </div>
  );
}







