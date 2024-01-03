import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


//Import Hooks 
import { KeyGenerate } from './KeyGenerate';
import { LocalStorageHook } from './localStorage';

export const SignUpHook = () => {

    const Navigate = useNavigate();
    const [keyGen, setKeyGen] = useState(0);
    const { settingKey, generateKey, parseKey } = KeyGenerate();
    const { setSingleItem } = LocalStorageHook();
    
      // useState for User Information 

    const [SignUpOne, setOne] = useState(
       {
            key: keyGen,
            first_name : "",
            Last_Name : "",
            House_Number : "",
            City : "",
            Province : "",
            Zipcode : "",
            Sex: "",
            Email_Address : "",
            Birthday : new Date(),
            Phone : "",
            Password : "",
            Pet_Information : []
       }
    );

    // Set Key value 

    const [ keyValue, setKeyValue ] = useState(0);

    const handleChange = (event) => { //Handling the each input value 
        setOne({ ...SignUpOne, [event.target.name]: event.target.value });

    }

    const handleSubmit = (event) => { //Handles the Submit button

        if(event.target.value === " "){
            alert('Please fill out the form');
            Navigate('/SignUp');
        }
        else{ 
            event.preventDefault();
            const nextKey = settingKey(); // Determines the size of the user database and determines key for next user 
            generateKey(nextKey); // Placing key to local storage 
            SignUpOne.key = parseKey('User_Key'); // Accessing object.key with the available key 
            setSingleItem(SignUpOne);
            Navigate('/AddPets')
        }
    };

    return { SignUpOne, handleChange, handleSubmit };
}