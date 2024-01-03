import {useContext, useState} from 'react';
import '../../components_css/profile_components_css/side_bar.css'

import { LogInHook } from '../../Hooks/log_in_hook';
import {DataContext} from "../../utils/data.js";

export const SideBar = () => {

    const { handleOut } = LogInHook();
    const {handleLogout} = useContext(DataContext);

    return (
        <div>
            <ul className="menu__box">
            <li><a className="menu__item" href="/">Home</a></li>
            <li><a className="menu__item" href="/PetInformation">Pet Information</a></li>
            <li><a className="menu__item" href="/Appointment">Book Appointment</a></li><br /><br />
            <li><a className="menu__item" onClick={ handleLogout }><img src="/src/assets/logout-icon.svg" alt="" />&nbsp;&nbsp;Logout</a></li>
            </ul>
        </div>
    )
}