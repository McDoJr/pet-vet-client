//Importing Assets 
import './checkup_service.css'
import petvetposts from '../../../json_render/petvetposts.json'; // Blog Posts
import divider1 from '../../../assets/divider1.svg'
import check_up_img from '../../../assets/check_up_img.png'

//Importing Components 
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';
import { ListRenderSpecify } from '../../../components/list_generate.jsx';


export const CheckupServices = () => {
    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <HeaderBanner banner="Check Up" text_align="right" svg_margin="svg-r" svg_align="hd-img-r"/>
            <div className="chck-post-cont col-md-11 mx-auto">
                <div className="section-1 row">
                    <div className="colu-1-cont col-md-7">
                        <p className="p1-s1-txt p-txt">
                            { petvetposts.check_up_posts.p_one }
                        </p>
                    </div>
                    <div className="cu-img-cont col-md-4">
                        <img src={ check_up_img } alt="" className="cu-img" />
                    </div>
                </div>
                <div className="section-2">
                    <div className="p1-s2-cont">
                        <p className="p2-s2-h p-header">
                            { petvetposts.check_up_posts.p_two.section_one }
                        </p>
                        <div className='mp-3rm'>
                            <ListRenderSpecify jsonhead={ petvetposts } 
                            jsontarget={ petvetposts.check_up_posts.p_two.section_two }/>
                        </div>
                        <span className="p3-s2-txt mp-3rm p-txt">
                            { petvetposts.check_up_posts.p_two.section_three }
                        </span>
                    </div>
                </div>
            </div>
            <div className="dvider col-md-12">
                <img src={ divider1 } alt="" className="dvider-svg" />
            </div>
            <ScheduleSection jsonhead={ petvetposts } jsontarget={ petvetposts.service_schedule.check_up } />
        </>
    );
}