import React, { useEffect } from 'react'
import Home from './Home'
import Sports from './Sports'
import Events from './Events'
import Theme from './Theme'

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="home">
        <Home />
      </div>

      <div id="theme">
        <Theme />
      </div>

      <div id="events">
        <Events />
      </div>

      <div id="sports">
        <Sports />
      </div>
    </div>
  );
};

export default Main;
