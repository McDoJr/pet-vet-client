//Style Sheets
import './services_style.css';
//import '../../../scss/primary_scss.scss';

//Assets
import dog_grooming_img from "../../../assets/dog_grooming_img.jpg";
import petvetposts from '../../../json_render/petvetposts.json'; // Blog Posts
import divider1 from '../../../assets/divider1.svg'

//Components 
import HeaderLogo from '../../../components/header_logo.jsx';
import { NavigationBar } from '../../../components/navi_bar.jsx';
import { ScheduleSection } from '../../../components/schedule_map.jsx';
import { HeaderBanner } from '../../../components/header_banner.jsx';
import { ListRenderFunc } from '../../../components/list_generate.jsx';

export const GroomingServicePage = () => {
    return(
        <>
            <HeaderLogo/>
            <NavigationBar/>
            <HeaderBanner banner="Groom" text_align="right" svg_margin="svg-r" svg_align="hd-img-r"/>
            <section className='grmng-post col-md-11 mx-auto'>
                <div className="row">
                    <div className="img-container col-md-6">
                        <img className='dog-grooming-img' src={ dog_grooming_img }/>
                    </div>
                    <div className='p-one-grmng col-md-5'> 
                        <span className='p-one-txt ml'>
                            { petvetposts.grooming_posts.p_one.post }
                        </span>
                        <span className='p-one-l-header ml'>
                            { petvetposts.grooming_posts.p_two.header_post }
                        </span>
                        <ListRenderFunc jsonhead={ petvetposts } jsontarget={ petvetposts.grooming_posts.p_two.body_list }/>
                    </div>
                </div>
            </section>
            <section className='s-divider'> 
                <img className='s-divide' src={divider1}/>
            </section>
            <section className="more-info">
                <ScheduleSection jsonhead={ petvetposts } jsontarget={ petvetposts.service_schedule.grooming } 
                />
            </section>
        </>
    );
};

const GroomingServiceList = () => {

    const renderList = petvetposts.grooming_posts.p_two.body_list.map((list_map, index) =>
        <ul className='post-list ml'>
            <li className='list-post' key={index}> {list_map} </li>
        </ul>
    )

    return <> {renderList} </>
}