import React from 'react';
import Events from '../EventsFolder/Events';  
import Research from '../Research/Research';
import Specialities from '../Specialities/Specialities';
import Landing from '../LandingPage/Landing';
import Stories from '../StoriesFolder/Stories';
 import Popupbtn from '../Popup/Popupbtn';
import Maps from '../Map/maps';
import Alerts from '../Alert/alertComp'


function Home(){
    return (
      <>
        <div className="formcontent">
          <div>
          <Alerts />
          </div>
          <Landing />
          <Specialities />
          <Events />
          <Research />
          <Stories />
          <Maps />
          <Popupbtn />
          
        </div>
      </>
    );

}

export default Home;
