//Assets
import '../components_css/schedule_map.css'
import map_info from '../json_render/map_info.json'

import { useState } from 'react';
import { Component } from 'react';

export const ScheduleSection = (jsonhead, jsontarget) => {

    const scheduleRender = jsonhead.jsontarget.map((schedule, index) =>
            <div className={'schedule-container ' + (schedule.w_border === true ? 'bor-s' : '')} key={index}>
                <div className="day-txt-cont" key={index}>
                    <span className="day-txt"> {schedule.day} </span>
                </div>
                <div className='time-txt-cont' key={index}>
                    <span className='time-txt'> {schedule.schedule} </span>
                </div>
            </div> 
    );




    return(
        <>
            <div className="schedule-head container-fluid">
                <div className="schedule-header">
                    <span className="header-text"> Our Regular Schedule </span>
                </div>
                <div className="s-container mx-auto">
                    { scheduleRender }
                </div>
            </div>
            <MapRender/>
            <FooterRender/>
        </>
    );  
}


export const MapRender = () => {

    return(
        <div className="map-contain col-md-10 mx-auto">
            <div className="map-fr">
                    <div className="address">
                        <div className="a-txt-wrp"> 
                                <span className="address-txt add-h"> Address </span>
                                <span className="address-txt add-b"> { map_info.map_information.location_name } </span>
                                <span className="address-txt add-h my-custom-top"> Contact Us </span>
                                <span className="address-txt add-b"> { "Phone: " + map_info.map_information.contact_information } </span>
                            </div>
                        </div>
                    <div className="mp-sk-fr">
                        <iframe 
                        className='map-sk'
                         src={ map_info.map_information.source_link } 
                           allowFullScreen="" 
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                </div>
            </div>
        </div>
    );
}

export const FooterRender = () => {
    return(
        <footer className="page-footer">
        <div className="about-us-container">
            <span className="abu-txt"> About Us </span>
        </div>
        <div className="links-one-container">
            <a className="link-1 p-2" href="#">  ABOUT US </a>
            <span className='dvide-ft p-2'> | </span> <a className="link-2 p-1" href="#">  CONTACT US </a> <span className='dvide-ft p-2'> | </span>
            <a className="link-3 p-2" href="#">  SITE MAP </a>
        </div>
        <div className="links-two-container">
            <a className="link-2-1 p-2" href="#">  COPYRIGHT 2023 PET FOR VET </a>
            <span className='dvide-ft p-2'> | </span> <a className="link-2-2 p-1" href="#">  PRIVACY POLICY </a> <span className='dvide-ft p-2'> | </span>
            <a className="link-2-3 p-2" href="#">  TERMS AND CONDITIONS </a>
        </div>
    </footer>
    );

}
