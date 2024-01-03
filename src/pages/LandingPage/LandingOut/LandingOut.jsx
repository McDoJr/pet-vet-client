//Importing Assets
import landing_dog from '../../../assets/landing_dog.png';
import './LandingOut.css';
import landing_posts from '../../../json_render/landing_posts.json'

//Importing Components
import HeaderLogo from "../../../components/header_logo";
import { NavigationBar } from "../../../components/navi_bar";
import { DividerSVG } from "../../../components/gray_divider";
import { MapRender } from '../../../components/schedule_map';
import { FooterRender } from '../../../components/schedule_map';
import { ProductDisplay } from '../../../components/profile_component/product_component';
import { CommentsComponent } from '../../../components/profile_component/comments_component';
import { LogInHook } from '../../../Hooks/log_in_hook';
import { authHook } from '../../../Hooks/authHook';

export const LandingOut = () => {

    const { authTrue } = authHook();
    let isChecked = authTrue();
    console.log(isChecked)

    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <div className="landing-bnner-txt flex-column col-md-12">
                <span className="landing-co-txt mx-auto"> Pet For Vet </span>
                <span className="landing-b-txt mx-auto"> Your one-solution for all things pet care </span>
            </div>
            <DividerSVG/>
            <div className="wc-txt col-md-10 mx-auto">
                <div className="row">
                    <div className="landing-dg-con col-md-5"> 
                        <img src={ landing_dog } alt="" className="landing-photo" />
                    </div>
                    <div className="wc-txt-con col-md-6">
                        <span className="wc-txt-ac"> { landing_posts.landing_page.welcome_banner } </span>
                        <p className="wc-grt-txt-ac"> { landing_posts.landing_page.welecome_text } </p>
                    </div>
                </div>
            </div>
            <DividerSVG/>
            <div className="col-md-10 mx-auto">
                {isChecked === true ? <ProductDisplay/> : <></>}
            </div>
            <div className="apptm-bnner-con col-md-12 flex-column ">
                <span className="apptm-b-txt"> Schedule Your Pet To Next Visit </span>
                <a href="/Appointment" className="apptm-link txt-deco-n mx-auto">
                    <button  className='book-apptm-btn mx-auto' type='button'> Book An Appointment </button>
                </a>
            </div>
            <MapRender/>
            <div className="comm-cont col-md-12 mx-auto">
                {isChecked === true ? <CommentsComponent/> : <></>}
            </div>
            <FooterRender/>
        </>
    );



}