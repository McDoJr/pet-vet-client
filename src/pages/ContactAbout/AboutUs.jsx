import React from 'react'
import { DividerSVG } from "../../components/gray_divider";
import './ContactAboutUs.css'

export const AboutUs = () => {

    let paragraph1 = 'Pet For Vet is a dedicated and compassionate veterinary clinic committed to providing top-quality care for your beloved pets. Our team of experienced and caring veterinarians and support staff is passionate about the well-being of animals, and we strive to ensure that every pet receives the best possible treatment.'
    let paragraph2 = 'At Pet For Vet, we offer a wide range of services, including preventative care, diagnostics, surgery, and emergency services. We understand the strong bond between pets and their owners, and our goal is to keep your furry family members healthy and happy.'
    let paragraph3 = 'Our clinic is equipped with state-of-the-art technology and facilities to deliver the highest standards of veterinary care. We believe in open communication, and we will work closely with you to create personalized treatment plans that meet your pet`s unique needs.'
    let paragraph4 = 'Your pet`s health and happiness are our top priorities, and we are dedicated to providing the best veterinary care possible. Thank you for entrusting us with the well-being of your cherished companions'

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
                            <span className='span-contactUs' >About Us</span>
                            <p align='justify' className='p-design'>{paragraph1}</p>
                            <p align='justify' className='p-design'>{paragraph2}</p>
                            <p align='justify' className='p-design'>{paragraph3}</p>
                            <p align='justify' className='p-design'>{paragraph4}</p>
                        </div>
                    </div>
                </div>
                <div className=''><DividerSVG/></div>
            </div>
        </>
    );
}