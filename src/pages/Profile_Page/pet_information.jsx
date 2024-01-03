import './pet_information.css';

// COMPONENTS
import HeaderLogo from '../../components/header_logo';
import { PetNavBar }  from '../../components/profile_component/pet_navbar';

import { authHook } from '../../Hooks/authHook';

import pet_pro from '../../assets/icons/pet_pro.jpg'
import {useContext} from "react";
import {DataContext} from "../../utils/data.js";

export const PetInformationPg = () => {

    const { authTrue, passData } = authHook();

    return(
        <> 
            <HeaderLogo/>
            <PetNavBar/>

            <PetProfile/>
        </>
    )

}


const PetProfile = () => {

    const {profile} = useContext(DataContext);
    const { authTrue, passData } = authHook();

    let parsed = profile;
    let pet_info = parsed.pets;
    console.log(parsed.Pet_Information)

    
    
    const pInform = pet_info.map((p, index) => 
    <div className="wrpper-pet-pro col-md-12 flx-col" key={index}>
        <div className="header-frm col-md-12"><span></span></div>
        <div className='p-info-con col-md-10 row'>
            <div className="img-pro-con col-md-1 mx-auto">
                <div className="img-con">
                    <img src={ pet_pro } alt="" className="pro_pic" />
                </div>
            </div>
            <div className="pet-name col-md-7">
                    <span className="p-name sp-block p-name"> "W" </span>
                    <span className='lbl-p sp-block sb-txt'> PET </span>
            </div>
        </div>
        <div className="pet-info col-md-8 mx-auto">
            <div className="hd-con">
                <span className="pet-header sp-block hd"> Pet Information</span>
            </div>
            <div className="info-r m-top offset-2 row flx-row"> 
                <div className="colu-1 col-md-4">
                    <div className="row f-w-nw">
                        <span className="spc-lbl col-md-4 sp-block pd-r-3 hd-font"> Species: </span>
                        <spn className="spc-name col-md-4 sp-block"> {p.species} </spn>
                    </div>
                    <div className="row">
                        <span className="spc-lbl col-md-4 sp-block pd-r-3 hd-font"> Date of Birth: </span>
                        <spn className="spc-name col-md-4 sp-block"> {p.birthday} </spn>
                    </div>
                    <div className="row">
                        <span className="spc-lbl col-md-4 sp-block pd-r-3 hd-font"> Breed: </span>
                        <spn className="spc-name col-md-4 sp-block"> {p.breed} </spn>
                    </div>
                    <div className="row">
                        <span className="spc-lbl col-md-4 sp-block pd-r-3 hd-font"> Spayed / Neutered: </span>
                        <spn className="spc-name col-md-4 sp-block"> {p.spayed} </spn>
                    </div>
                </div>
                <div className="colu-2 col-md-4">
                    <div className="row">
                        <span className="spc-lbl col-md-4 pd-r-3 hd-font"> Sex: </span>
                        <spn className="spc-name col-md-4"> {p.sex} </spn>
                    </div>
                    <div className="row">
                        <span className="spc-lbl col-md-4 pd-r-3 hd-font"> Color: </span>
                        <spn className="spc-name col-md-4"> {p.color} </spn>
                    </div>
                    <div className="row">
                        <span className="spc-lbl col-md-4 pd-r-3 hd-font"> Vaccine Status: </span>
                        <spn className="spc-name col-md-4"> {p.vaccine_status} </spn>
                    </div>
                </div>
            </div>

        </div>
    </div>);

    return <> {pInform}</>
}