//JSON Files
import dropdownrender from '../json_render/dropdown_menu.json';

//Components
import { DropdownMenu } from './navi_dropdowns';
import { authHook } from '../Hooks/authHook';
//Stylesheet
import '../components_css/navi_bar.css'

// ASSETS
import profile_icon from '../assets/icons/profile_icon.png'
import {useContext} from "react";
import {DataContext} from "../utils/data.js";
import {Link} from "react-router-dom";

export const NavigationBar = () => {

    const { authTrue, passData } = authHook();
    const {profile} = useContext(DataContext);


    let data = passData()
    let parsed = JSON.parse(data)

    return(
        <nav className="navbar bg-body-custom">
            <div className="navigation-grp">
                <button className="home-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                    <a className="home-btn btn-txt-gen txt-decor-n" href='/'> Home </a>
                </button>
                <button className="nav-item dropdown pr btn-gen" data-toggle="dropdown">
                    <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                        <span className='btn-txt-gen'> 
                        <span className="btn-txt"> 
                            Services
                        </span> 
                        <span className="dp-arrow">
                            <svg className="dp-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                            <path d="M11.5 7.99864L8.99994 4.99932L6.49988 2L1.5 8" stroke="black" stroke-width="2"/>
                            </svg>
                        </span>
                        </span> 
                    </a>
                    <DropdownMenu jsonhead={ dropdownrender } jsontarget={ dropdownrender.dropdown_services }/>
                </button>
                <button className="ab-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                    <a className="home-btn btn-txt-gen txt-decor-n" href='/AboutUs'> About Us </a>
                </button>
                <button className="cu-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                    <a className="home-btn btn-txt-gen txt-decor-n" href='/ContactUs'> Contact Us </a>
                </button>
                <button className="nav-item dropdown pr btn-gen">
                    <a className="nav-link" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                    <span className='btn-txt-gen'> 
                        <span className="btn-txt"> 
                            Payment Options
                        </span> 
                        <span className="dp-arrow">
                            <svg className="dp-arrow-svg" xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                            <path d="M11.5 7.99864L8.99994 4.99932L6.49988 2L1.5 8" stroke="black" stroke-width="2"/>
                            </svg>
                        </span>
                        </span>  
                    </a>
                    <DropdownMenu jsonhead={ dropdownrender } jsontarget={ dropdownrender.dropdown_payment }/>
                </button>
            </div>
            { !profile ?
            <div className='navi-ls-grp'>

                    <a href="/LogIn" className="login-btn">
                        <button className="lg-in-btn btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                            <span className="lg-in-txt btn-txt-gen"> Log In </span>
                        </button>
                    </a>
                    <a href="/SignUp">
                        <button className='btn-prop pr ml mr' type="button"> 
                            <span className='c-sgn-up'> Sign Up </span>
                        </button>
                    </a>
            </div>
            :
            <div className='profile-logged'>
                <div className="user-name">
                    <span className="usr-name-sp"> { profile.firstname + " " + profile.lastname } </span>
                </div>
                <Link to="/Profile">
                    <div className="nav-profile-photo">
                        <img src={profile_icon} alt="" />
                    </div>
                </Link>
            </div>

        }
        </nav>
    );

}