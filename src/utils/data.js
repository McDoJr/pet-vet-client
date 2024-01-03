import {createContext} from "react";

export const getProfileData = ({id, firstname, lastname, sex,
                                   address, city, province, zip_code,
                                   email, birthday, phone, password, token, pets = []}) => {
    return {id, token, email, password, firstname, lastname, sex, address, city, province, pets, birthday, zip_code, phone};
}


export const getAppointmentData = ({id, pet_name, species, breed, comments}) => {
    return {id, pet_name, species, breed, comments};
}

export const DataContext = createContext(null);