import React from 'react'
import './GcashAuthPage.css'


export const GcashConfirmPage = () => {

    let totalAmount = '650.00'

    function SubmitAuth(){
        // alert('Transaction Successful!')
        location.href="/GcashLoadingScreen"
    }

  return (
    <>
        <div className='inner-div-container'>
            <img className='logo-design' src="/src/assets/Gcash_logo-blue.svg" alt="gcashBlueLogo" />
            <span className='span-text'>You are about to pay</span>
            <span className='span-text' style={{fontWeight: '800'}}>Php {totalAmount}</span>
            <span className='span-text'>using your Gcash</span>
            {/* <div className='auth-code'> 
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
            </div>       */}
                <button className='submit-button-class' style={{marginTop: '5rem'}} onClick={SubmitAuth}>SUBMIT</button>
        </div>
    </>
  );
}
