//Style Sheets
import '../components_css/header_logo.css';

//Import Assets 

import logo from '../assets/logo.svg';
import text_logo from '../assets/text_logo.svg';


function HeaderLogo(){
    return(
        <div className='container-fluid logo-bar' id="logo-bar">
            <div className="logo-container">
                <div className='c-logo-cntner' id='c-logo-cntner'>
                    <img className='c-logo' id='c-logo' src={ logo }/> 
                </div>
                <div className='c-logo-banner-cntner' id='c-logo-banner-cntner'>
                    <img className='c-logo-banner' id='c-logo-banner' src={ text_logo }/>
                </div>
            </div>
        </div>
    );

}

export default HeaderLogo;  