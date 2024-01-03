import { useContext, useEffect, useRef, useState } from 'react';
import { SignUpHook } from '../../../Hooks/sign_up_hook';
//Import Assets
import './sign_up.css'

//Import Components
import { Required } from '../../../components/labels/required_label';
import axios from "axios";
import {STRAPI_URL} from "../../../App.jsx";
import {DataContext} from "../../../utils/data.js";
import {useNavigate} from "react-router-dom";

export const SignUpPage = () => {

    // const { SignUpOne, handleChange, handleSubmit } = SignUpHook();
    const {handleLogin} = useContext(DataContext);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${STRAPI_URL}/api/auth/local/register`, {...formData, username: formData.firstname})
            .then(res => {
                const {user, jwt} = res.data;
                handleLogin({...user, token: jwt});
                navigate("/AddPets");
            })
            .catch(error => console.log(error));
    }

    return(
        <>
        <div className="body-wrap mx-auto">
           <div className="sign-up-form-wrp mx-auto">
                <div className="form-header">
                    <a className='svg-class' href="/LogIn">
                        <span className='arrow-svg-cont'>
                            <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                            <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM28 10.5L2 10.5V13.5L28 13.5V10.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                        <span className="sgnup-txt">
                            Sign Up
                        </span>
                </div>
                <div className="owner-info-cont gen-mg-l gen-mg-r">
                    {/* Owner Information */}
                    <span className="oinfo-txt fin-prop"> Owner Information <Required/> </span> 
                    <div className="s1-p1-cont flx-row h-mg-t">
                        <form className='f-name-cont'>
                            <label className='f-name txt-al-l fin-prop' htmlFor='f-name'> First Name <Required/> </label><br/>
                            <input type="text" id="f-name" name="firstname" className='w-2125 f-style' onChange={ handleChange } required/><br/>
                        </form>
                        <form className='l-name-cont f-mrg-l'>
                            <label className='l-name fin-prop' htmlFor='l-name'> Last Name <Required/> </label><br/>
                            <input type="text" id="l-name" name="lastname" className='w-2125 f-style' onChange={ handleChange } required/>
                        </form>
                    </div>
                    {/* Address */}
                    <span className='add-txt txt-al-l fin-prop'> Address <Required/> </span><br/>
                    <div className="s1-p2-cont flx-row f-mrg-t-0-5">
                        <form className='add-cont'>
                            <label htmlFor='add-hsn' className='hsn-txt txt-al-l sub-fin-prop'> House Number, Street <Required/> </label><br/>
                            <input type="text" id="add-hsn" name="address" className='add-prop-inp f-style' onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='sx-cont f-mrg-l'>
                            <label className='sx-drp fin-prop'> Sex <Required/> </label><br/>
                            <select name="sex" id="select-cont" className='sx-slctor' onChange={ handleChange } placeholder='Select'>
                                <option className='wrp' value="default"> Select </option>
                                <option className='wrp' name="Sex" value="Male" onChange={ handleChange }> Male </option>
                                <option className='wrp' name="Sex" value="Female" onChange={ handleChange }> Female </option>
                            </select>
                        </form>
                    </div>
                    <div className="s1-p3-cont flx-row f-mrg-t-0-5">
                        <form className='city-cont'>
                            <label htmlFor='add-city' className='city-txt txt-al-l sub-fin-prop'> City <Required/> </label><br/>
                            <input type="text" id="add-city" name="city" className='cpz f-style'
                            onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='prov-cont f-mrg-l'>
                            <label htmlFor='add-prov' className='city-txt sub-fin-prop'> Province <Required/> </label><br/>
                            <input type="text" id="add-prov" name="province" className='cpz f-style'
                            onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='zip-cont f-mrg-l'>
                            <label htmlFor='add-zip' className='city-txt sub-fin-prop'> Zipcode <Required/> </label><br/>
                            <input type="text" id="add-zip" name="zip_code" className='cpz f-style' onChange={ handleChange } required/><br></br>
                        </form>
                    </div>
                    <div className="s1-p4-cont flx-row f-mrg-t-0-5">
                        <form className='em-cont'>
                            <label htmlFor='email-add' className='em-txt txt-al-l fin-prop'> Email Address <Required/> </label><br/>
                            <input type="text" id="email-add" name="email" className='f-style emdob'
                            onChange={ handleChange } required/>
                        </form>
                        <form className='dob-cont f-mrg-l'>
                            <label htmlFor='dob' className='dob-txt txt-al-l fin-prop'> Date of Birth <Required/> </label><br/>
                            <input type="date"id="b-day" name="birthday" className='f-style emdob pdl-2'
                            onChange={ handleChange } required/>
                        </form>
                    </div>
                    <div className="flex-row">
                    <form className='phone-cont f-mrg-t-0-5 flex-prop'>
                        <label htmlFor='phone-num' className='dob-txt txt-al-l fin-prop'> Phone <Required/> </label> <br/>
                        <input type="text" id="phone-num" name="phone" className='f-style w-2125'
                        onChange={ handleChange } required/>
                    </form>
                    <form className='passw-cont spc-bet f-mrg-t-0-5 flex-prop'>
                        <label htmlFor='pass-num' className='dob-txt txt-al-l fin-prop'> Password <Required/> </label> <br/>
                        <input type="password" id="pass-num" name="password" className='f-style w-2125'
                        onChange={ handleChange } required/>
                    </form>
                    </div>
                </div>
                <div className='pet-info-cont gen-mg-l gen-mg-r f-mrg-t'> 
                        <div className="sub-btn-wrp mx-auto text-de-n">
                            <button type='submit' className='submit-btn' onClick={ handleSubmit }> Submit </button> 
                        </div>

                </div>
           </div>
        </div>
        </>
    );
}
