import React, { useState } from 'react'
import ClientType from './ClientType';
import ClientInfo from './ClientInfo'
import ClientPayment from './ClientPayment'
import ClientAvailability from './ClientAvailability';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderLogo from "../../../components/header_logo";
import { NavigationBar } from "../../../components/navi_bar";
import { DividerSVG } from "../../../components/gray_divider";
import { MapRender } from '../../../components/schedule_map';
import { FooterRender } from '../../../components/schedule_map';

import "./appointment_style.css"

export const AppointmentFormPage = () => {

  const [formData, setformData] = useState({
    clientType: '',
    location: '',
    selectedService: '',
    selectedProvider: '',
    selectedDate: '',
    clientFirstName: '',
    clientLastName: '',
    clientDateOfBirth: '',
    clientEmailAddress: '',
    clientPhoneNumber: '',
    clientPetName: '',
    clientPetSpecies: '',
    clientPetBreed: '',
    clientComment: '',
    selectedPayment: ''
  });

  const [page, setPage] = useState(0);
  const progressNumber = [ 0.25, 0.50, 0.75, 1]

  const PreviousClick = () => {
    setPage((currentPage) => currentPage-1);
  }

  const NextClick = () => {
    setPage((currentPage) => currentPage+1);
  }

  const DisplayComponent = () => {
    if (page === 0){
      return <ClientType formData={formData} setformData={setformData}/>;
    } else if (page === 1){
      return <ClientAvailability formData={formData} setformData={setformData}/>
    } else if (page === 2){
      return <ClientInfo formData={formData} setformData={setformData}/>
    } else{
      return <ClientPayment formData={formData} setformData={setformData}/>
    }
  }

  function RenderButton(){
    if(page != 3){
      return <button className='button-class' onClick={NextClick}>Next</button>
    }
  }

  function RenderArrowBackButton(){
    if(page != 0){
      return <ArrowBackIcon className='arrow-design' onClick={PreviousClick}/>
    }
  }
  
  return (
    <>
      <HeaderLogo/>
      <NavigationBar/>
      <div className='appointment-form'>
        <div className='main-header'>
          <RenderArrowBackButton />
          <h1 className='header-title'>Booking an Appointment</h1>
          <div className='progress-indicator'>
            <progress value={progressNumber[page]}/>
          </div>
        </div>
        <div className='form-container'>
          {DisplayComponent()}
        </div>
        <div className='form-footer'>
          <RenderButton />
        </div>     
      </div>
      <DividerSVG/>
      <MapRender/>
      <FooterRender/>
    </>
  )
}