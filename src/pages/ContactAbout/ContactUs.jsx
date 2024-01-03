import React from 'react'
import { DividerSVG } from "../../components/gray_divider";
import './ContactAboutUs.css'

export const ContactUs = () => {
    return (
        <>
            <div className='col-md12'>
                <div className=''><DividerSVG/></div>
                <div className='row'>
                    <div className='col-md-4'>
                        <a href="/">
                            <img className='logo-dimensions' src="/src/assets/pet-for-vet-logo.svg"/>
                        </a>
                    </div>
                    <div className='col-md-8 contact-information'>
                        <div className='contact-arrangement'>
                            <span className='span-contactUs' >Contact Us</span>
                            <div className='div-information'>
                                <img src="/src/assets/phone.svg"/>
                                <span className='span-margin'>+639987654321</span>
                            </div>
                            <div>
                                <img src="/src/assets/marker.svg"/>
                                <span className='span-margin'>WGXV+426, Ester Luna St, Butuan City, Agusan Del Norte</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''><DividerSVG/></div>
            </div>
        </>
    );
}