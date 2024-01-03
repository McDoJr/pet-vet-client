//Importing Assets 
import './Surgery_Service.css'
import petvetposts from '../../../json_render/petvetposts.json'; // Blog Posts
import divider1 from '../../../assets/divider1.svg'
import surgery_dog_img from '../../../assets/surgery_dog_img.png'

//Importing Components 
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';


export const SurgeryService = () => {
    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <HeaderBanner banner="Surgery" text_align="left" svg_margin="svg-l" svg_align="hd-img-l"/>
            <div className="surg-post-cont col-md-11 mx-auto">
                <div className="s-post-cont row">
                    <div className="s-img-cont col-md-5">
                        <img src={ surgery_dog_img } alt="" className="s-img" />
                    </div>
                    <div className="s-post-cont col-md-7">
                        <p className="s1-post-txt p-txt">
                            { petvetposts.surgery.section_one }
                        </p>
                        <p className="s2-post-txt p-txt">
                            { petvetposts.surgery.section_two }
                        </p>
                        <p className="s3-post-txt p-txt">
                            { petvetposts.surgery.section_three }
                        </p>
                        <p className="s4-post-txt p-txt">
                            { petvetposts.surgery.section_four }
                        </p>
                    </div>
                </div>
            </div>
            <div className="dvider col-md-12">
                <img src={ divider1 } alt="" className="dvider-svg" />
            </div>
            <ScheduleSection jsonhead={ petvetposts } jsontarget={ petvetposts.service_schedule.surgery }/>
        </>
    );
}