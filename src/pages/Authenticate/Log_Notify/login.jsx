import './log.css';
import welcome_logo from '../../../assets/welcome_logo.png';
import { useNavigate } from 'react-router-dom';

export const WelcomeLog = () => {
    const Navigate = useNavigate();

    function handleContinue(){
        Navigate('/LogIn')
    }


    return(
        <>
        <div className="bg-wrp">
            <div className="log-wc-pt mx-auto">
                <div className="cont-wrp">
                    <div className="wc-logo-cont sp-l-block mx-auto">
                        <img src={ welcome_logo } alt="" className="wlc-logo-pic mx-auto sp-l-block" />
                    </div>
                    <div className="scss-cont mx-auto">
                        <span className="success-spn sp-l-block mx-auto">
                            SUCCESS!
                        </span>
                    </div>
                <div className="txt-container mx-auto">
                    <span className="ty-lg-bnner sp-l-block">
                        Thank you logging in!
                    </span>
                    <span className="ch-email sp-l-block mx-auto">
                        Kindly check you email for confirmation!
                    </span>   
                </div>
                <button className='con-prop mx-auto' onClick={ handleContinue }>
                    <span className="con-txt">
                        Continue
                    </span>      
                </button>
            </div>
            </div>
        </div>
        </>
    );







}