'use client';
import React from 'react';
import FormfacadeEmbed from '@formfacade/embed-react';

const Registration = () => {
  return (
    <div>
      <FormfacadeEmbed
        formFacadeURL='https://formfacade.com/include/117291229236658943874/form/1FAIpQLSeXWLwHQUflSuMmNf9jT-xgcvVjb_WHTrOT6rBoEUoZzOgGnQ/classic.js/?div=ff-compose'
        onSubmitForm={() => console.log('Form submitted')}
      />
    </div>
  );
};

export default Registration;
