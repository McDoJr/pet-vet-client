import {useContext, useState} from 'react';

//Import Assets
import { useNavigate } from 'react-router-dom';
import { ArrangingObjects } from './Sign_in';
import { LocalStorageHook } from './localStorage';
import axios from "axios";
import {STRAPI_URL} from "../App.jsx";
import {DataContext} from "../utils/data.js";




export const AddPetsHook = () =>{

    const {profile, loadPets} = useContext(DataContext);
    const Navigate = useNavigate();
    const { returnCurrPKeyValue, incrementPKeyValue, currSignUpKey, retrieveObject } = ArrangingObjects();
    const { dataToLocal, dataToLocalArr, mergingObjects } = LocalStorageHook();


    // ADD PET FORM OBJECT TEMPLATE 
    
    const [ useStateHead, setupPet ] = useState({
        Owner_Key: 0,
        Pet_Key: 0,
        Pet_Name : "",
        Pet_Birthday : "",
        Species : "",
        Breed : "",
        Color : "",
        Pet_Sex : "",
        Spayed_Not : "",
        Vaccine_Status : ""
    });

    const [ petKey, setPetKey ] = useState(0);


    // FUNCTIONS UTILIZED IN ADD_PETS.JSX

    const handlechange = (event) => { //Contains functionality of input forms
        console.log('Input changed:', event.target.value);
        setupPet({...useStateHead, [event.target.name]: event.target.value});
    }


    const clearInput = () => { //Clears Input forms after a pet is submitted 
        document.getElementById('pet-name').value = '';
        document.getElementById('pet-dob-inp').value = '';
        document.getElementsByName('species').value = '';
        document.getElementById('breed-name').value = '';
        document.getElementById('pet-color').value = '';
        document.getElementsByName('pet_sex').value = '';
        document.getElementsByName('spayed_not').value = '';
        document.getElementsByName('Vaccine_Status').value = '';
        document.getElementsByName('Color').value = '';
    }

     
    const handleSubmit = (event) => {
        
        event.preventDefault();
        axios.post(`${STRAPI_URL}/api/pets`, {
            data: {
                name: useStateHead.Pet_Name,
                user: profile.id,
                birthday: useStateHead.Pet_Birthday,
                species: useStateHead.Species,
                breed: useStateHead.Breed,
                color: useStateHead.Color,
                sex: useStateHead.Pet_Sex,
                spayed: useStateHead.Spayed_Not,
                vaccine_status: useStateHead.Vaccine_Status
            }
        }, {
            headers: {
                Authorization: `Bearer ${profile.token}`
            }
        }).then(res => {
            loadPets();
            console.log(res.data.data);
        }).catch(error => {
            console.log(error);
        })
        // console.log("Pet Key: " + returnCurrPKeyValue(petKey));
        //
        // // RETRIEVE THE CURRENT SIGN UP KEY & THE AVAILABLE PET KEYS [ADJUSTED MECHANISM WITH ACTUAL DB]
        // useStateHead.Owner_Key = currSignUpKey();
        // useStateHead.Pet_Key = returnCurrPKeyValue(petKey);
        //
        // const ownerInfo = retrieveObject('Registered_Account', currSignUpKey())
        // dataToLocalArr("Pet_Data", useStateHead); //Save Pet Data to Local
        // const pet_data = JSON.parse(localStorage.getItem('Pet_Data'));
        //
        // // MERGE {OWNER_DATA, PET_DATA} TO BE FINAL_DATA (DB PROXY)
        // const mergedObject = mergingObjects(ownerInfo, pet_data);
        // dataToLocal("Final_Data", mergedObject);
        //
        // // INCREMENT ID BY 1 [OPTIONAL IF REAL DB EXISTS]
        // // CLEAR INPUT, SUCCESS...
        // setPetKey( petKey + 1 );
        // clearInput();

    };

    const handleLogIn = () => {

        const retrieveFinal = localStorage.getItem('Final_Data');
        localStorage.removeItem('Registered_Account');
        localStorage.removeItem('Pet_Data');
        localStorage.removeItem('Final_Data');
        dataToLocalArr('LocalStorageFinal', JSON.parse(retrieveFinal))
        console.log(retrieveFinal); 
        Navigate('/Welcome');
        
    }

    return {useStateHead, handlechange, clearInput, handleSubmit, handleLogIn};
}