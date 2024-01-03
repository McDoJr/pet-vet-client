
//Importing Assets 
import './service_dental.css';
import petvetposts from '../../../json_render/petvetposts.json'; 
import dog_dental from '../../../assets/dog_dental.jpg';
import divider1 from '../../../assets/divider1.svg'

//Importing Components
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';
import { ListRenderSpecify } from '../../../components/list_generate.jsx';

export const DentalServices = () => {
    return (<>
                <HeaderLogo/>
                <NavigationBar/>
                <HeaderBanner banner="Dental" text_align="left" svg_margin="svg-l" svg_align="hd-img-l"/>
                <div className="dnt-post col-md-11 mx-auto">
                    <div className="row">
                        <div className="col-md-6 dden-cont">
                            <img src={ dog_dental } alt="" className="dog-dental"/>
                        </div>
                        <div className="col-md-5 dental-posts-a">
                            <span className="d-txt" id='d-txt'>
                                { petvetposts.dental_posts.p_one.post }
                            </span>
                            <span className="list-header" id='list-header'>
                                { petvetposts.dental_posts.header_list }
                            </span>
                            <ListRenderSpecify jsonhead={ petvetposts } jsontarget={ petvetposts.dental_posts.p_two} 
                            />
                        </div>
                    </div>
                    <div className="last-stat">
                        <span className="ls-txt">
                            { petvetposts.dental_posts.last_post }
                        </span>
                    </div>
                </div>
                <div className="dvder-1 col-md-12">
                        <img className='dvder-svg' src={ divider1 } alt="" />
                </div>
                <ScheduleSection jsonhead={ petvetposts} jsontarget={ petvetposts.service_schedule.dental} />
    
    </>);
}