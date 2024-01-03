import { useContext, useEffect, useRef, useState } from 'react';

//Import Assets
import './sign_up.css'
import { Required } from '../../../components/labels/required_label';


import { AddPetsHook } from '../../../Hooks/add_pets_hook';

export const PetInformation = () => {

   const {useStateHead, handlechange, handleSubmit, handleLogIn} = AddPetsHook();
  
    return(
        <>
        <div className="body-wrap mx-auto">
           <div className="add-pet-form-wrp mx-auto">
                <div className="form-header">
                    <a className='svg-class' href="/SignUp">
                        <span className='arrow-svg-cont'>
                        <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM28 10.5L2 10.5V13.5L28 13.5V10.5Z" fill="black"/>
                    </svg>
                </span>
            </a>
            <span className="addp-txt mx-auto">
                Add Pets
            </span>
        </div>
        {/* Pet Information Section */}
        <span className='pet-info-txt txt-al-l fin-prop'> Pet Information <Required/> </span> <br/>
        <span className='pet-info-txt txt-al-l fin-prop'> Pet Number { useStateHead.Pet_Key }<Required/> </span> <br/>
        <span className='pet-fill-txt txt-al-l'> Please fill out for all of your pets! <Required/> </span> <br/>
        <div className="s2-p1-cont flx-row">
            {/* Pet Name Part */}
            <form action="" className="pe-name-cont">
                <label htmlFor='pet-name' className='pet-name-txt txt-al-l fin-prop'> Pet Name <Required/> </label> <br/>
                <input type="text" id="pet-name" name="Pet_Name" className='p-name w-2125 f-style'
                value={ useStateHead.Pet_Name } onChange={ handlechange }/>
            </form>
            {/* Date of Birth Part */}
            <form action="" className="pet-dob-cont f-mrg-l">
                <label htmlFor='pet-dob-inp' className='phone-txt txt-al-l fin-prop'> Date of Birth <Required/> </label> <br/>
                <input type="text" id="pet-dob-inp" name="Pet_Birthday" className='pet-dob-inp w-2125 f-style'
                value={ useStateHead.Pet_Birthday } onChange={ handlechange }/>
            </form>
        </div>
        {/* Species & Breed Section */}
        <div className="s2-p2-cont flx-row h-mg-t">
            {/* Species Part */}
            <form action="" className="spcs-cont">
                <span className='txt-al-l fin-prop'> Species <Required/> </span> <br/>
                <input type="radio" id="spcs-canine" name="Species"  value="Canine" onChange={ handlechange }/>
                    <label htmlFor='spcs-canine' className='can-txt spc-l choices-prop'> Canine  </label>
                <input type="radio" id="spcs-feline" name="Species" className='f-mrg-l' value="Feline" onChange={ handlechange }/>
                    <label htmlFor="spcs-feline" className='fel-txt spc-l choices-prop'> Feline </label>
                <input type="radio" id="spcs-others" name="Species" className='f-mrg-l'/>
                <input htmlFor="spcs-others" type="text" placeholder="Others" id="spcs-others" name="species-specify" className='others-specified f-style spc-l' onChange={ handlechange }/>
            </form>
            {/* Breed Part */}
            <form action="" className="breed-cont f-mrg-l">
                <span className='brd-txt txt-al-l fin-prop'> Breed <Required/> </span> <br/>
                <input type="text" id="breed-name" name="Breed" className='f-style'
                value={ useStateHead.Breed } onChange={ handlechange }/>
            </form>
        </div>
        {/* Pet Color & Pet Sex Section */}
        <div className="s2-p3-cont flx-row h-mg-t">
            {/* Pet Color */}
            <form action="" className="pet-color-cont">
                <span className='pet-color-txt txt-al-l fin-prop'> Color <Required/> </span> <br/>
                <input type="text" id="pet-color" name="Color" className='w-2125 f-style'
                value={ useStateHead.Color } onChange={ handlechange }/>
            </form>
            {/* Pet Sex Form Part */}
            <form action="" className="pet-sex-cont f-mrg-l">
                <span className='sx-txt txt-al-l fin-prop'> Sex <Required/> </span> <br/>
                <input type="radio" id="html" name="Pet_Sex" value="Male" onChange={ handlechange }/>
                    <label className='ps-mal spc-l choices-prop' htmlFor='ps-male'> Male  </label>
                <input type="radio" id="ps-female" name="Pet_Sex" className='spc-l' value="Female" onChange={ handlechange }/>
                    <label className='ps-fem spc-l choices-prop' htmlFor='ps-female'> Female </label>
            </form>
        </div>
        {/* Spayed & Vaccine Section */}
        <div className="s2-p4-cont flx-row h-mg-t">
            {/* Spayed/Neutered Question Part */}
            <form action="" className="san-question-cont">
                <span className='san-txt txt-al-l fin-prop'> Spayed/Neutered? <Required/> </span> <br/>
                <input type="radio" id="san-yes" name="Spayed_Not" value="Yes" onChange={ handlechange }/>
                    <label className='san-yes spc-l choices-prop' htmlFor='san-yes'> Yes </label>
                <input type="radio" id="san-no" name="Spayed_Not" className='f-mrg-l' value="No" onChange={ handlechange }/>
                    <label className='san-no spc-l choices-prop' htmlFor='san-no'> No </label>
            </form>
            {/* Vaccine Question Part */}
            <form action="" className="vaccine-question-cont"> 
                <span className='vaccine-q fin-prop'> Is your pet currently up to date on vaccines? <Required/> </span> <br/>
                <input type="radio" id="vaccine-yes" name="Vaccine_Status" value="Yes" onChange={ handlechange }/>
                    <label className='v-yes spc-l choices-prop' htmlFor='vaccine-yes'> Yes </label>                
                <input type="radio" id="vaccine-no" name="Vaccine_Status" className='f-mrg-l'  value="No" onChange={ handlechange }/>
                    <label id='v-no' className="v-no spc-l choices-prop" htmlFor='vaccine-no'> No </label>
                <input type="radio" id="vaccine-unknown" name="Vaccine_Status"className='f-mrg-l' value="Unknown" onChange={ handlechange }/>
                    <label className='v-ukn spc-l choices-prop' htmlFor='vaccine-unknown'> Unknown </label>
            </form>
        </div>
        <div className="sub-btn-wrp mx-auto flx-row">
            <input type='submit' placeholder='Add Pet' className='submit-btn m-4' id='add-pet-btn' onClick={ handleSubmit }/> 
             <button className='submit-btn m-4' onClick={ handleLogIn }> Log In </button> 
        </div>
    </div>
</div>
        </>
    );
}
