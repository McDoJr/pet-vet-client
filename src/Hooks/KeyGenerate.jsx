import { useState } from "react";




export const KeyGenerate = () => {

    const settingKey = () => {
        const retrieveLength = JSON.parse(localStorage.getItem('LocalStorageFinal')) ? JSON.parse(localStorage.getItem('LocalStorageFinal')).length : 0;
        console.log("In the setting...")
        return retrieveLength;
    }

    const generateKey = (previousKey) => {
        localStorage.setItem("User_Key", JSON.stringify(previousKey));
        console.log("Key saved!");
    }

    const parseKey = (local_key) => {
        const parsedKey = parseInt(localStorage.getItem(local_key));
        return parsedKey;
    }

    return { settingKey, generateKey, parseKey};

}