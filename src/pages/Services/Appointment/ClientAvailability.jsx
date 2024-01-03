import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import Select from 'react-select'
import './appointment_style.css'

const Services = [
  {value: 'Grooming', label: 'Grooming'},
  {value: 'Dental', label: 'Dental'},
  {value: 'Vaccines', label: 'Vaccines'},
  {value: 'Check Up', label: 'Check Up'},
  {value: 'Surgery', label: 'Surgery'},
  {value: 'Spaying or Neutering', label: 'Spaying or Neutering'}
];

const Providers = [
  {value: 'Dr. Lorem', label: 'Dr. Lorem'},
  {value: 'Dr. Ipsum', label: 'Dr. Ipsum'}
];

export function VisitReason({formData ,setformData}){

  const [serviceValue, setserviceValue] = useState('');

  const updateServiceValue = (event) => {
    setserviceValue(event);
    setformData({...formData, selectedService: event.value});
  };

  return (
    <Select placeholder={formData.selectedService === ''? 'Select a Service': formData.selectedService} options={Services} onChange={updateServiceValue}/>
  );
}

export function ServiceProvider({formData, setformData}){

  const [providerValue, setproviderValue] = useState('');

  const updateProviderValue = (event) => {
    setproviderValue(event);
    setformData({...formData, selectedProvider: event.value})
  }

  return (
    <Select placeholder={formData.selectedProvider === ''? 'Select a Provider': formData.selectedProvider} options={Providers} value={providerValue} onChange={updateProviderValue}/>
  );
}


function ClientAvailability({formData, setformData}) {
  return (
    <div className='flex-container'>
      <div className='visit-form'>
        <b className='span-margin0'>Reason for your visit:</b>
        <VisitReason style="margin-bottom: 0.5rem;" formData={formData} setformData={setformData}/>
        <b className='span-margin1'>Provider:</b>
        <ServiceProvider formData={formData} setformData={setformData}/>
      </div>
      <div className='visit-form1'>
        <b>Availability:</b>
        <div className='calendar-dimension'>
          <Calendar className='calendar-custom' onClickDay={(event) => {setformData({...formData, selectedDate: event.toDateString()})}}/>
        </div>
      </div>
    </div>
  )
}

export default ClientAvailability