import React, { Component, useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import './GcashPage.css'

export const GcashPage = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  return(
    <>
      <div className='upper-div'>
        <div className='inner-div'>
          <a className='back-button' href='/'>back</a>
          <img className='logo-design' src="/src/assets/Gcash_logo-white.svg" alt="gcashBlueLogo" />
        </div>
      </div>
      <div className='card-div'>
        <div className='div-upper'>
          <div className='upper-left'>
            <span className='span-modified'>Merchant</span>
            <span className='span-modified'>Amount Due</span>
          </div>
          <div className='upper-right'>
            <span className='service-selected span-modified'>PETFORVET/ Grooming</span>
            <span className='amount-due span-modified'>PHP 650.00</span>
          </div>
        </div>
        <div className='div-lower'>
          <p className='p-modified'>Login to pay with Gcash</p>
          <p className='p-modified'>+63&nbsp;<PhoneInput maxLength={10} country='PH' value={phoneNumber} onChange={setPhoneNumber} /></p>
          <a href="/GcashAuthPage">
            <button className='auth-button-class'>NEXT</button>
          </a>
        </div>
      </div>
      <div></div>
    </>
  );
}