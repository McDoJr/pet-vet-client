//Importing Assets 
import './Spaying_Services.css'
import petvetposts from '../../../json_render/petvetposts.json'; // Blog Posts
import divider1 from '../../../assets/divider1.svg'
import sponu_img from '../../../assets/sponu_img.png'

//Importing Components 
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';
import { DividerSVG } from '../../../components/gray_divider.jsx';

export const SpayingServices = () => {
    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <HeaderBanner banner="Spaying or Neutering" text_align="right" svg_margin="svg-r" svg_align="hd-img-r svg-r"/>
            <div className="son-post-cont col-md-11 mx-auto">
                <div className="p1-cont row">
                    <div className="p1-txt col-md-7 mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_one }
                    </div>
                    <div className="p1-img col-md-4">
                        <img src={ sponu_img } alt="" className="p1-img-png" />
                    </div>
                </div>
                <div className="p2-cont">
                    <span className="p2-h p-header">
                        { petvetposts.SpayingOrNeutering.post_two.section_heading }
                    </span>
                    <p className="p2-s1-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_two.section_one }
                    </p>
                    <p className="p2-s2-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_two.section_two }
                    </p>
                    <p className="p2-s3-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_two.section_three }
                    </p>
                </div>
                <div className="p3-cont mp-3rm">
                    <span className="p3-h p-header">
                        { petvetposts.SpayingOrNeutering.post_three.section_heading }
                    </span>
                    <p className="p3-s1-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_three.section_one }
                    </p>
                </div>
                <div className="p4-cont mp-3rm">
                    <span className="p4-h p-header">
                        { petvetposts.SpayingOrNeutering.post_four.section_heading }
                    </span>
                    <p className="p4-s1-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_four.section_one }
                    </p>
                    <p className="p4-s2-txt mp-2rm p-txt">
                        { petvetposts.SpayingOrNeutering.post_four.section_two }
                    </p>
                </div>
            </div>
            <DividerSVG/>
            <ScheduleSection jsonhead={ petvetposts } jsontarget={ petvetposts.service_schedule.SpayingOrNeutering }/>
        </>
    );
}