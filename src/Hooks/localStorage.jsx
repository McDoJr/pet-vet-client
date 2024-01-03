import React from "react";
import { useEffect, useState } from "react";



export const LocalStorageHook = () => {

    const [parsedItem, setParsed] = useState([]);


    const setSingleItem = (value) => {
        const object = value;
        const inArray = [object]
        localStorage.setItem("Registered_Account", JSON.stringify(inArray));
    }

    const getLocalItem = (local_key) => {
        console.log("GLI: ", local_key);
        return localStorage.getItem(local_key);
    }



    // SAVE ITEMS TO LOCAL STORAGE 

    function dataToLocal(key_name, data){ //Returns a single object 
        //const getPetData = localStorage.getItem(key_name);
        //let arrayContainer = getPetData ? JSON.parse(getPetData) : {};
        let arrayContainer = data;
        localStorage.setItem(key_name, JSON.stringify(arrayContainer));
        console.log("Container: " + arrayContainer);
    }

    function dataToLocalArr(key_name, data){ //Returns an array of object
        const getPetData = localStorage.getItem(key_name);
        const arrayContainer = getPetData ? JSON.parse(getPetData) : [];
        arrayContainer.push(data);
        localStorage.setItem(key_name, JSON.stringify(arrayContainer));
        console.log("Container: " + arrayContainer);
    }                                                                                                                                                                                                                    

    function mergingObjects(ownerInformation, PetArray){
        const addObjects = {...ownerInformation, "Pet_Information"  : PetArray}
        
        return addObjects;      

    }


    return { setSingleItem, getLocalItem, dataToLocal, dataToLocalArr, mergingObjects };
};