import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'

import "./appointment_style.css"
import 'react-phone-number-input/style.css'

function ClientInfo({formData, setformData}) {

  const [selectedPhoneNumber, setselectedPhoneNumber] = useState('')

  const updatePhoneNumber = (setselectedPhoneNumber) => {
    setformData({...formData, clientPhoneNumber: setselectedPhoneNumber})
  }

  return (
    <div className='appointment-container'>
      <div className='appointment-info'>
        <b>Appointment Information:</b>
        <label className='label-modified'>
          <span>This appointment is for:</span>
          <input type='text' disabled={true} defaultValue={formData.clientType != 'newClient'? 'Returning Client': 'New Client'}/>
        </label>
        <label className='label-modified'>
          <span>Reason for your visit:</span>
          <input type='text' disabled={true} defaultValue={formData.selectedService}/>
        </label>
        <label className='label-modified'>
          <span>Provider:</span><br />
          <input type='text' disabled={true} defaultValue={formData.selectedProvider}/>
        </label>
        <label className='label-modified'>
          <span>Appointment Date & Time:</span>
          <input type='text' disabled={true} defaultValue={formData.selectedDate}/>
        </label>
        <label className='label-modified'>
          <span>Location</span><br />
          <input type='text' disabled={true} defaultValue={formData.location}/>
        </label>
      </div>
      <div className='client-info'>
        <b>Client Information:</b>
        <div className="inner-container">
          <label className='label-modified'>
            <span>First Name</span>
            <input type='text' maxLength={15} className='input-width' value={formData.clientFirstName} onChange={(event) => setformData({...formData, clientFirstName: event.target.value})}/>
          </label>
          <label className='label-modified'>
            <span>Last Name</span>
            <input type='text' maxLength={15} className='input-width' value={formData.clientLastName} onChange={(event) => setformData({...formData, clientLastName: event.target.value})}/>
          </label>
        </div>
        <label className='label-modified'>
          <span>Date of Birth</span><br />
          <input className='custom-label' type="date" value={formData.clientDateOfBirth} onChange={(event) => setformData({...formData, clientDateOfBirth: event.target.value})}/>
        </label>
        <div className='inner-container'>
          <label className='label-modified'>
            <span>Email Address</span>
            <input type='email' className='input-width' value={formData.clientEmailAddress} onChange={(event) => setformData({...formData, clientEmailAddress: event.target.value})}/>
          </label>
        </div>
        <label className='label-modified'>
          <span>Phone Number</span><br />
          <PhoneInput maxLength={10} country='PH' className='custom-label' value={formData.clientPhoneNumber === null? selectedPhoneNumber: formData.clientPhoneNumber} onChange={updatePhoneNumber}/>
        </label>
        <label className='label-modified'>
          <span>Pet Name</span><br />
          <input maxLength={15} className='custom-label' type='text' value={formData.clientPetName} onChange={(event) => setformData({...formData, clientPetName: event.target.value})}/>
        </label>
        <div className='inner-container'>
          <label className='label-modified'>
            <span>Species</span><br />
            <input maxLength={15} type='text' className='input-width' value={formData.clientPetSpecies} onChange={(event) => setformData({...formData, clientPetSpecies: event.target.value})}/>
          </label>
          <label className='label-modified'>
            <span>Breed</span><br />
            <input maxLength={15} type='text' className='input-width' value={formData.clientPetBreed} onChange={(event) => setformData({...formData, clientPetBreed: event.target.value})}/>
          </label>
        </div>
        <label className='label-modified'>
          <span>Comments</span><br />
          <textarea maxLength={100} className='comment-width' value={formData.clientComment} onChange={(event) => setformData({...formData, clientComment: event.target.value})}/>
        </label>
      </div>
    </div>
  )
}

export default ClientInfo