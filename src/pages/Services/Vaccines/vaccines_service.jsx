//Importing Assets 
import './vaccines_service.css'
import petvetposts from '../../../json_render/petvetposts.json'; // Blog Posts
import divider1 from '../../../assets/divider1.svg'
import cat_vaccine_img from '../../../assets/cat_vaccine_img.png'

//Importing Components 
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';
import { VaccineListRender } from '../../../components/list_generate.jsx';


export const VaccineServices = () => {
    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <HeaderBanner banner="Vaccines" text_align="right" svg_margin="svg-r" svg_align="hd-img-r svg-r"/>
            <div className="col-md-11 v-posts mx-auto">
                <div className="row posts-cont">
                    <div className="post-1 p1-cont col-md-7">
                        <p className="post-1-txt p-txt">
                            { petvetposts.Vaccines.post_one}
                        </p>
                    </div>
                    <div className="post-1-img-cont col-md-4">
                        <img src={ cat_vaccine_img } alt="" className="post-1-img" />
                    </div>
                </div>
                <div className="post-2-cont">
                    <span className="s1 p-txt">
                        { petvetposts.Vaccines.post_two.section_1 }
                    </span>
                    <span className="s3-p2-header mp-3rm p-header">
                        { petvetposts.Vaccines.post_two.section_header }
                    </span>
                    <p className="s3-txt mp-2rm p-txt">
                        { petvetposts.Vaccines.post_two.section_3 }
                    </p>
                </div>
                <div className="post-3-cont">
                    <span className="p3-s1-h p-header">
                        { petvetposts.Vaccines.post_3.section_header }
                    </span>
                    <p className="p3-s1-post mp-2rm p-txt">
                        { petvetposts.Vaccines.post_3.section_one }
                    </p>
                    <VaccineListRender jsonhead={ petvetposts } jsontarget={ petvetposts.Vaccines.post_3.section_three }/>
                    <p className="p3-1-s1-post mp-2rm p-txt">
                        { petvetposts.Vaccines.post_3.section_three_one }
                    </p>
                </div>
                <div className="p3-s4-cont">
                    <span className="p3-s4-h mp-3rm p-header">
                        { petvetposts.Vaccines.post_3.section_four.section_header }
                    </span>
                    <p className="p3-s4-p1 mp-2rm p-txt">
                        { petvetposts.Vaccines.post_3.section_four.post }
                    </p>
                    <p className="p3-s4-p2 mp-2rm p-txt">
                        { petvetposts.Vaccines.post_3.section_four.last_post }
                    </p>
                </div>
            </div>
            <div className="dvider col-md-12">
                <img src={ divider1 } alt="" className="dvider-img" />
            </div>
            <ScheduleSection jsonhead={ petvetposts } jsontarget={ petvetposts.service_schedule.vaccine }/>
        </>
    );
}