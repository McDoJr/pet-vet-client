import React, { useState } from 'react'
import Select from 'react-select';

const Options = [
  {value: 'Cash', label: 'Cash'},
  {value: 'GCash', label: 'GCash'},
];

export function PaymentOption({formData, setformData}){

  const [selectedOption, setselectedOption] = useState('');

  const updateValue = (event) => {
    setselectedOption(event);
    setformData({...formData, selectedPayment: event.value});
  };
  
  return (
    <Select className='payment-size' placeholder={formData.selectedPayment === ''? 'Select Payment': formData.selectedPayment} options={Options} onChange={updateValue}/>
  );
}

function ClientPayment({formData, setformData}) {

  const SubmitForm = () => {
    let isValidForm = false;

    for (const [key, value] of Object.entries(formData)) {
      if (value === '') {
        alert(`Invalid/Missing input: ${key}`);
        break;
      } else {
        isValidForm = true;
      }
    }

    if (isValidForm == true){
      // alert('Appointment Successfully Created!')
      location.href='/BookingLoadingScreen'
    }

  };

  return (
    <div className='payment-div'>
      <b>Payment Options:</b><br />
      <PaymentOption formData={formData} setformData={setformData}/>
      <button className='button-class button-margin' onClick={SubmitForm} >Submit</button>
    </div>
  )
}

export default ClientPayment