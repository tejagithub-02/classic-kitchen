import React, { useEffect, useState } from 'react';

import Preloader from './components/Preloader';


import Banner from './components/Banner';
import Dishes from './components/Dishes';
import Services from './components/Services';
import BookingForm from './components/BookingForm';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
      <>
        <Banner/>
        <Dishes/>
        <Services/>
        <BookingForm/>
       </>
      )}
    </>
  );
};

export default App;
