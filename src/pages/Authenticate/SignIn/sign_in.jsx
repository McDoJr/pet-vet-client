//Importing Assets 
import './sign_in.css'
import sign_in_logo from '../../../assets/sign_in_logo.svg'
import forgot_password from '../../../assets/forgot_password.svg'
import { LogInHook } from '../../../Hooks/log_in_hook';
import {useContext, useState} from "react";
import axios from "axios";
import {STRAPI_URL} from "../../../App.jsx";
import {DataContext} from "../../../utils/data.js";
import {useNavigate} from "react-router-dom";

export const LogIn = () => {

    // const { d, value, handleChange, AuthenticateAccount} = LogInHook();

    const [formData, setFormData] = useState({});
    const {handleLogin} = useContext(DataContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${STRAPI_URL}/api/auth/local`, {
            identifier: formData.email,
            password: formData.password
        }).then(res => {
            const {user, jwt} = res.data;
            handleLogin({...user, token: jwt});
            navigate("/");
        }).catch(error => {
            console.log(error);
        })
    }

    return(  
        <div className="log-in-body-wrp"> 
            <div className="log-in-wrap mx-auto">
                <div className="log-in-logo-wrp mx-auto">
                    <img src={ sign_in_logo } alt="" className="logo-svg" />
                </div>
                <span className="log-in-banner mx-auto">
                    Pet for Vet
                </span>
                <div className="log-acc-form flex-col mx-auto">
                    <form action="" className="acc-authen">
                        <input type="email" id="acc-name" name="email" className='acc-name form-size-app form-f-prop font-16-int pd-in-form-l' onChange={ handleChange} placeholder='Email Address'/><br/>
                        <input type='password' id='acc-password' name="password" className='acc-pass form-size-app form-f-prop font-16-int pd-in-form-l'onChange={ handleChange } placeholder='Password'/>
                    </form> 
                </div>
                <div className="log-in-brow-cont flex-row ">
                    <form action="" className="remember-form">
                        <input type='checkbox' id="remember-me" name="remember-me" className='remember-cbox'/>
                        <label htmlFor='remember-me' className='remember-lbl font-10-int'> Remember Me </label>
                    </form>
                    <div className="forgot-pass-cont flex-row sp-bet">
                        <a href="#" className="f-pass-link dis-design-none">
                            <span className="for-pass-icon-con span-in-block vert-a-mid"> 
                                <img src={ forgot_password } alt="" className="forgot-pass-icon" />
                            </span>
                            <span className="for-pass-lbl sp-in-block font-10-int">
                                Forgot Password
                            </span>
                        </a>
                    </div>
                </div>
                <button type="submit" className='log-in-btn mx-auto' onClick={ handleSubmit }> Log In </button>
                
                <div className="sign-up-link mx-auto">
                    <span className="no-acc-q"> No Account? </span>
                    <a href="/SignUp" className="create-acc-link dis-design-none">
                        <span className="create-acc"> CREATE ACCOUNT </span>
                    </a>
                </div>
            </div>
        </div>
    );
}