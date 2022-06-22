import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Headers';
import Footer from './Components/Footer/Footer';



import HomecareScreen from './Screens/HomecareScreen'
import Specialities from './Screens/SpecialitiesScreen';
import Aboutscreen from './Screens/Aboutscreen';

import Register from './Screens/Register'
import FormScreen from './Screens/FormScreen';
import ResearchScreen from './Screens/ResearchScreen'
import EmeservSreen from './Screens/EmeservSreen'
import Moeventscreen from './Screens/Moeventscreen';
import Home from './Components/HomeFolder/Home';
import SpecialitiesScreen from './Screens/SpecialitiesScreen'
import LoginScreen from './Screens/LoginScreen';
import Staffscreen from './Screens/Staffscreen'
import Appointments from './Screens/Appointments'
// import Applicationforms from './EducationPortal/Applicationforms'
// import Applicationforms2 from './EducationPortal/Applicationforms2'
// import Applicationforms3 from './EducationPortal/Applicationforms3';
// import StudentLogin from './EducationPortal/StudentLogin';
// import HomePage from './EducationPortal/HomePage';
// import StudentDashboard from './EducationPortal/StudentDashboard';
// import Programs from './EducationPortal/Programs'
// import StudentProfile from './EducationPortal/StudentProfile';
import Profile from './Screens/Profile'
import Readmore from './Screens/Readmore'; 


require('dotenv').config();

function App() {
  
  return (
    <>
    <Header />
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/form" element={<FormScreen/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/hcare" element={<HomecareScreen/>} />
      <Route path="/rscreen" element={<ResearchScreen/>} />
      <Route path="/specscreen" element={<Specialities/>} />
      <Route path="/emergservice" element={<EmeservSreen/>} />
      <Route path="/moeevents" element={<Moeventscreen/>} />
      <Route path="/login" element={<LoginScreen/>}></Route>
      <Route path="/about" element={<Aboutscreen/>}></Route>
      <Route path="/staff" element={<Staffscreen/>}></Route>
      <Route path="/specialities" element={<SpecialitiesScreen/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/appts" element={<Appointments/>}></Route>
      {/* <Route path="/applicationforms" element={Applicationforms}></Route>
      <Route path="/applicationforms2" element={Applicationforms2}></Route>
      <Route path="/applicationforms3" element={Applicationforms3}></Route>
      <Route path="/studentlogin" element={StudentLogin}></Route>
      <Route path="/studenthome" element={HomePage}></Route>
      <Route path="/StudentDashboard" element={StudentDashboard}></Route>
      <Route path="/StudentProfile" element={StudentProfile}></Route>
      <Route path="/programs" element={Programs}></Route> */}
      <Route path="/readmore" element={<Readmore/>}></Route>
     
      </Routes>
     <Footer />
     </>
  );

}

export default App;
