//Import Packages
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages

import { GroomingServicePage } from './pages/Services/Grooming/grooming_index.jsx'
import { AppointmentFormPage } from './pages/Services/Appointment/appointment_index.jsx';
import { DentalServices } from './pages/Services/Dental/service_dental.jsx';
import { VaccineServices } from './pages/Services/Vaccines/vaccines_service.jsx';
import { CheckupServices } from './pages/Services/Checkup/checkup_service.jsx';
import { SurgeryService } from './pages/Services/Surgery/Surgery_Service.jsx';
import { SpayingServices } from './pages/Services/SpayingOrNeutering/Spaying_Services.jsx';
import { SignUpPage } from './pages/Authenticate/SignUp/sign_up.jsx';
import { LogIn } from './pages/Authenticate/SignIn/sign_in.jsx';
import { LandingOut } from './pages/LandingPage/LandingOut/LandingOut.jsx';
import { PetInformation } from './pages/Authenticate/SignUp/add_pets.jsx';
import { WelcomeLog } from './pages/Authenticate/Log_Notify/login.jsx';
import { ErrorLog } from './pages/Authenticate/Log_Notify/login_error.jsx';
import { GcashLoadingScreen } from './components/loading_screen/Gcashloading_screen.jsx';
import { OnhandLoadingScreen } from './components/loading_screen/Onhandloading_screen.jsx';
import { BookingLoadingScreen } from './components/loading_screen/Bookingloading_screen.jsx';


// IMPORT WRAPPER 
import { ProfileWrapper } from './pages/App_Wrapper/Profile_Wrap.jsx';
import { LogInWrapper } from './pages/App_Wrapper/Profile_Wrap.jsx';
//To be deleted
import { SignUpTest } from './pages/Authenticate/SignUp/sign_up_old_ver.jsx';

import { GcashPage } from './pages/GcashPage/GcashPage.jsx';
import { GcashAuthPage } from './pages/GcashPage/GcashAuthPage.jsx';
import { GcashConfirmPage } from './pages/GcashPage/GcashConfirmPage.jsx';
import { ContactUs } from './pages/ContactAbout/ContactUs.jsx';
import { AboutUs } from './pages/ContactAbout/AboutUs.jsx';

import { authHook } from './Hooks/authHook.jsx';
import { PetInfoWrap } from './pages/App_Wrapper/Profile_Wrap.jsx';
import './App.css'
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import {DataContext, getProfileData} from "./utils/data.js";


function App() {

  const { authTrue } = authHook();

  const [profile, setProfile] = useState(null);

  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("pv_token");
    if(token) {
      const {id} = jwtDecode(token);
      axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setProfile(getProfileData({...res.data, token}));
      }).catch(error => {
        console.log(error);
      })
    }
  }, []);

  const handleLogin = (profileData) => {
    const {id, token} = profileData;
    const decoded = jwtDecode(token);
    axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setProfile({...res.data, token});
    }).catch(error => {
      setProfile(getProfileData(profileData));
      console.log(error);
    })
    cookies.set("pv_token", token, {
      expires: new Date(decoded.exp * 1000)
    })
  }

  const handleLogout = () => {
    cookies.remove("pv_token");
    setProfile(null);
  }

  const loadPets = () => {
    axios.get(`${STRAPI_URL}/api/users/${profile.id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${profile.token}`
      }
    }).then(res => {
      setProfile(getProfileData({...res.data, token: profile.token}));
    }).catch(error => {
      console.log(error);
    })
  }
  

  return (

      <DataContext.Provider value={{profile, handleLogin, handleLogout, loadPets}}>
        <Router>
          <Routes>
            <Route path="/" element={ <LandingOut/> }/>
            <Route path="/Grooming" element={ <GroomingServicePage/> }/>
            <Route path="/Dental" element={ <DentalServices/> }/>
            <Route path="/Vaccines" element={ <VaccineServices/> } />
            <Route path="/CheckUp" element={ <CheckupServices/> } />
            <Route path="/Surgery" element={ <SurgeryService/> } />
            <Route path="/SpayingOrNeutering" element={ <SpayingServices/> } />
            <Route path="/SignUp" element={ <SignUpPage/> } />
            <Route path="/Login" element={ <LogInWrapper/> } />
            <Route path="/Profile" element={<ProfileWrapper/>} />
            <Route path="/Appointment" element={ <AppointmentFormPage/> }/>
            <Route path="/AddPets" element={ <PetInformation/> }/>
            <Route path='/Welcome' element={ <WelcomeLog/> } />
            <Route path='/Error' element={ <ErrorLog/> } />
            <Route path='/Logim/Login' element={ <LogIn/> }/>

            {/* TESTING ROUTE */}
            <Route path='/TestingEnv' element={ <SignUpTest/> }/>

            <Route path="/GcashPage" element={<GcashPage/>}/>
            <Route path="/GcashAuthPage" element={ <GcashAuthPage/> }/>
            <Route path="GcashConfirmPage" element={ <GcashConfirmPage/> }/>
            <Route path="/ContactUs" element={ <ContactUs/> }/>
            <Route path="/AboutUs" element={ <AboutUs/> }/>
            <Route path="/GcashLoadingScreen" element= { <GcashLoadingScreen/> }/>
            <Route path="/OnhandLoadingScreen" element= { <OnhandLoadingScreen/> }/>
            <Route path="/BookingLoadingScreen" element= { <BookingLoadingScreen/> }/>
            <Route path="/PetInformation" element={ <PetInfoWrap/> } />
          </Routes>
        </Router>
      </DataContext.Provider>
  );
}

export default App
export const STRAPI_URL = `http://localhost:1337`;
