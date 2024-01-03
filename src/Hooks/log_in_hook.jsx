import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocalStorageHook } from './localStorage';

export const LogInHook = () => {

    const { dataToLocal } = LocalStorageHook();

    const [value, setValue] = useState(false);
    const [d, setD] = useState({})

    const [logIn, setLogIn] = useState('')
    const Navigate = useNavigate();
    const handleChange = (event) => {
        setLogIn({ ...logIn, [event.target.name]: event.target.value });
    }

    //Sub Functions 
    
    function getValues(form_id){
        const value = document.getElementById(form_id);
        return value; 
    }


    function checkExist(input, pass, items){
        let json =  JSON.parse(JSON.stringify(items))
        const filtered = json.filter((e) => {
            return e.Email_Address === input
        }).length > 0;

        if(filtered === true){
            const retrieveData = json.filter((e) => {
                return e.Email_Address === input;
            })
            if(retrieveData[0].Password === pass){
                returnValue(retrieveData[0])
                Navigate('/')
            }else{
                alert('Password is incorrect!');
            }
        }
        else{
            alert('Account does not exist.');
        }

    }

    //Functions 

    function AuthenticateAccount(){
        const get_email = getValues('acc-name').value;
        const get_pass = getValues('acc-password').value;
        const getArray = JSON.parse(localStorage.getItem('LocalStorageFinal'));
        const jsonInfo =  JSON.stringify(checkExist(get_email, get_pass, getArray));
        console.log("checkExist " + JSON.stringify(checkExist(get_email, get_pass, getArray)))
    }


    function returnValue(data){
        setValue(true);
        setD(data);

        try{
            console.log("data ", data)
            let dat = data
            dataToLocal('Session', JSON.parse(JSON.stringify(dat)));
            }catch(error){
            console.log("ERR ", error)
        }
    }

    function isTrue(){
        const dt = localStorage.getItem('Session');
        console.log("DT ", dt)
        if(dt){
            return true;
        }else{
            return false;
        }
    }

    function getSession(){
        return localStorage.getItem('Session');
    }

    function handleOut(){
        const removeSession = localStorage.removeItem('Session');
        Navigate('/');
        return removeSession;
    }

    return { d, value, handleChange, AuthenticateAccount, isTrue, getSession, handleOut };



}
