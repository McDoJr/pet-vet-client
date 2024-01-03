import './error.css';
import error from '../../../assets/error.svg';

export const ErrorLog = () => {

    return(
        <>
            <div className="bg-wrp">
                <div className="log-wc-pt mx-auto">
                    <div className="cont-wrp">
                        <div className="wc-logo-cont sp-l-block mx-auto">
                            <img src={ error } alt="" className="wlc-logo-pic mx-auto sp-l-block" />
                        </div>
                        <div className="scss-cont mx-auto">
                            <span className="error-spn sp-l-block mx-auto">
                            ERROR!
                            </span>
                        </div>
                    <div className="txt-container mx-auto">
                        <span className="error-lg-bnner sp-l-block">
                        Thank you for your request. <br/>
                        We are unable to continue the process.
                        </span>
                        <span className="a-email sp-l-block mx-auto">
                            Please try again to complete the request.
                        </span>   
                    </div>
                    <div className="btn">
                        <button className="btn-error">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );







}