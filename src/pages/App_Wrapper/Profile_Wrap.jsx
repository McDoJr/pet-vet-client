import {authHook} from "../../Hooks/authHook"
import {ProfilePage} from "../Profile_Page/profilepage";
import {LandingOut} from "../LandingPage/LandingOut/LandingOut";
import {LogIn} from "../Authenticate/SignIn/sign_in";
import {PetInformationPg} from "../Profile_Page/pet_information";
import {useContext} from "react";
import {DataContext} from "../../utils/data.js";

export const ProfileWrapper = () => {

    const { authTrue } = authHook();
    const {profile} = useContext(DataContext);

    return profile ? <ProfilePage/> : <LandingOut/>;

}


export const LogInWrapper = () => {

    const { authTrue } = authHook();
    const {profile} = useContext(DataContext);

    return profile ? <ProfilePage/> : <LogIn/>;

}

export const PetInfoWrap = () => {
    const { authTrue } = authHook();
    const {profile} = useContext(DataContext);

    return profile ? <PetInformationPg/> : <LogIn/>;
}