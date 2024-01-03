//Import CSS

import '../components_css/header_banner.css';
import header_border from '../assets/icons/header_border.svg';

export const HeaderBanner = ({banner, text_align, svg_margin, svg_align}) => { 
    return(
    <>
        <div className={"pg-name-head col-md-12 " + text_align} id="pg-name-head">
            <span className='pg-name-txt'> { banner } </span>
        </div>
        <div className={"hd-design col-md-12 " + svg_margin}>
            <img src={header_border} alt="" className={ svg_align } />
        </div>
    </>
    );
}