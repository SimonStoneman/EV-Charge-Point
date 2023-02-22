
import React from 'react';

import SuggestBar from '../Components/SuggestBar/suggestBar'

import Sidebar from '../Components/Sidebar/Sidebar';

import Maparea from '../Components/Maparea/Maparea';


function Landing() {
    return (
      <>
        <h1>Landing</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui veniam, quas, possimus nulla cumque corporis fugit impedit dolor quibusdam suscipit? Id doloremque mollitia aliquid, molestiae magnam quae? Libero, dicta?</p>


        <Sidebar />

        <Maparea />

        <SuggestBar />


      </>
    )
  }
  
  export default Landing;