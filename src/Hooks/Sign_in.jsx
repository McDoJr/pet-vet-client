import { useEffect, useState } from "react";
import { LocalStorageHook } from "./localStorage";

export const ArrangingObjects = () => {

    const { getLocalItem } = LocalStorageHook();
    
    const [ petKey, setPetKey ] = useState(0);
    const [ val, setVal ] = useState("");
    const [ object, setObject ] = useState({});

    // FOR PET KEY MANAGEMENT

    const returnCurrPKeyValue = (value) => {
        setPetKey(value);
        return petKey;
    }

    const incrementPKeyValue = () => {
        setPetKey( petKey + 1 );
        return petKey;
    }

    // OWNER KEY MANAGEMENT 

    const currSignUpKey = () => {
        const userID = localStorage.getItem('User_Key'); 
        return userID; 
    }

    // RETRIEVE OBJECT BASED ON KEY 

    let targetUser = {}

    const retrieveObject = (user_key, user_id) => {
        const users = JSON.parse(localStorage.getItem(user_key))
        for(const user in users ){ 
            if(users[user].key == user_id){
                targetUser = users[user]
            }
        }
        
        return targetUser;
    }




    return { val, returnCurrPKeyValue, incrementPKeyValue, currSignUpKey, retrieveObject };

}