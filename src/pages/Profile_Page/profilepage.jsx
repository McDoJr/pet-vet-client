//Importing Assets 
import './profilepage.css'
import profile from '../../assets/profile.png'

import { DividerSVG } from '../../components/gray_divider';
import { SideBar } from '../../components/profile_component/side_bar';
import {useContext, useState} from 'react';
import '../../components_css/profile_components_css/side_bar.css'
import { authHook } from '../../Hooks/authHook';
import { LogInHook } from '../../Hooks/log_in_hook';
import { Navigate } from 'react-router-dom';
import {DataContext} from "../../utils/data.js";

export const ProfilePage = () => {

    const { passData } = authHook();
    const {profile} = useContext(DataContext);
    
    let data = passData()
    let parsed = profile;
    console.log(parsed.first_name)

    let date = new Date();
    let date2 = new Date(parsed.birthday);
    let clientName = parsed.firstname + " " + parsed.lastname;
    let clientBirthDate = parsed.birthday;
    let clientAddress = parsed.city;
    let clientEmailAddress = parsed.email;
    let clientNumberOfPets = 0;
    let clientAge = Math.abs(date - parsed.birthday);
    let clientSex = parsed.sex;
    let clientPhoneNumber = parsed.phone;



    const [sbarOpen, setSbarOpen] = useState(false);

    const handleToggle = () => {
     const condition = sbarOpen === false ?  setSbarOpen(true) : setSbarOpen(false);
     return condition;
    }

    return(
        <>
        <div></div>
        <div className=' flx'>
            <div className='header-logo'>
                <img className='header-image' src="/src/assets/petforvet-horizontal-logo.svg"/>
            </div>
            <DividerSVG/>
            <div className="row"> 
            <div className={"gen-prop col-md-1 " + (sbarOpen === false ? 'col-md-1' : ' col-md-2') }>
                <div className="menu__toggle s-bar-toggle">
                        <input id="menu__toggle" type="checkbox" onChange={ handleToggle } />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                </div>
                {sbarOpen === false ? '' : <SideBar/>}
            </div>
            <div className={"body-prop " + (sbarOpen === false ? 'col-md-11': 'col-md-10')}>
                <div className='cover-div container-fluid'> </div>
                <div className="img-info-container offset-1">
                    <div className="img-box">
                        <img src={ profile } alt="" className="profile"  />
                    </div>
                    <div className="name-user-info client-header">
                        <span className='client-name'> {clientName} </span>
                        <span>PET OWNER</span><br />
                    </div>
                </div>
                <div className=''/>
                    <div className='client-information col-md-11 offset-1'>
                        <span className='owner-detail'>Owner<br/>Information:</span>
                        <div className='client-content'>
                            <div className='inner-content-div'>
                                <span className='client-attributes'>Birth Date:</span><br />
                                <span className='client-attributes'>Address:</span><br />
                                <span className='client-attributes'>Email Address:</span><br />
                                <span className='client-attributes'>Number of Pets:</span><br />
                            </div>
                            <div className='inner-content-div'>
                                <span>{clientBirthDate}</span><br />
                                <span>{clientAddress}</span><br />
                                <span>{clientEmailAddress}</span><br />
                                <span>{clientNumberOfPets}</span><br />
                            </div>
                            <div className='inner-content-div'>
                                <span className='client-attributes'>Age</span><br />
                                <span className='client-attributes'>Sex</span><br />
                                <span className='client-attributes'>Phone</span><br />
                            </div>
                            <div className='inner-content-div'>
                                <span>{clientAge}</span><br />
                                <span>{clientSex}</span><br />
                                <span>{clientPhoneNumber}</span><br />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </>
    );
}