import React from 'react'
import './GcashAuthPage.css'


export const GcashAuthPage = () => {

    function SubmitAuth(){
        alert('Transaction Successful!')
    }

  return (
    <>
        <div className='inner-div-container'>
            <img className='logo-design' src="/src/assets/Gcash_logo-blue.svg" alt="gcashBlueLogo" />
            <span className='span-text'>Please enter the authentication code.</span>
            <div className='auth-code'>
                <input className='text-size' type="text" maxLength={1}/>
                <input className='text-size' type="text" maxLength={1}/>
                <input className='text-size' type="text" maxLength={1}/>
                <input className='text-size' type="text" maxLength={1}/>
                <input className='text-size' type="text" maxLength={1}/>
                <input className='text-size' type="text" maxLength={1}/>
            </div>
            <div className='small-div'>
                <span className='small-text'>Didn't get the code?</span>
                <a className='small-text'>Tap here to send</a>
            </div>
            <a href='/GcashConfirmPage'>
                <button className='submit-button-class'>SUBMIT</button>
            </a>
        </div>
    </>
  );
}
