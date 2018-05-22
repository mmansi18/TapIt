import React, { Component } from 'react';
import AgeGate from './AgeGate';
import SocialLogin from './SocialLogin/SocialLogin';

import './index.css';

class LandingPage extends Component {
  render() {
    return (

      <div className='main'>
        <AgeGate />
        <SocialLogin />
      </div>

    );
  };
};

export default LandingPage;