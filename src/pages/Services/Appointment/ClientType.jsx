import React from 'react'
import "./appointment_style.css"

function ClientType({formData, setformData}) {
  return (
    <>
      <b>This appointment is for:</b>
      <div className='form-groups'>
        <label className='rounded-border label-modified'>
          <input required={true} type="radio" name='clientType' value='newClient' checked={formData.clientType === 'newClient'} onChange={(event) => setformData({...formData, clientType: event.target.value})}/>
          &nbsp;<span>New Client</span>
        </label>
        <label className='rounded-border label-modified'>
          <input type="radio" name='clientType' value="returningClient" checked={formData.clientType === 'returningClient'} onChange={(event) => setformData({...formData, clientType: event.target.value})}/>
          &nbsp;<span>Returning Client</span>
          {}
        </label>
      </div>
      <div className='location-div'>
        <label className='label-div label-modified'>
          <b>Location:</b><br/>
          <input required={true} type="text"  className='input-location' value={formData.location} onChange={(event) => setformData({...formData, location: event.target.value})}/>
        </label>
      </div>
    </>
  )
}

export default ClientType