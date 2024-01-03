import { useEffect, useRef, useState } from 'react';

//Import Assets
import './sign_up.css'
import sign_up from '../../../json_render/sign_up.json'


//Import Components
import { Required } from '../../../components/labels/required_label';
import { SexSelect } from '../../../components/ddown_selector';




export const SignUpTest = () => {

  
    // ================
    const [SignUpOne, setOne] = useState(
       {
            first_name : "",
            Last_Name : "",
            House_Number : "",
            City : "",
            Province : "",
            Zipcode : "",
            Email_Address : "",
            Birthday : "",
            Phone : "",
       }
    )


    // ================ For Regular Forms ================

    let keyUpdate;
    const handleChange = (event) => {
        setOne({ ...SignUpOne, [event.target.name]: event.target.value });

    }

    // ================ For Pet Information Form ================
 
    const handlePetChange = (event) => {
        setPetInform({...PetInform, [event.target.name] : event.target.value})
    }
    
    let key = 0
    const petFormInit = [<PetInformation/>]


    const handlePetFormChange = (event) => {
        const addForm = [...PetAddForm, [petFormInit]];
        setAddForm(addForm);
 
    }

    
    // ================ Create an Instance ================

    const [StateHead, prepUseState] = useState(
        {
            id: 0,
            Pet_Name : "",
            Pet_Birthday : "",
            Species : "",
            Breed : "",
            Color : "",
            Pet_Sex : "",
            Spayed_Not : "",
            Vaccine_Status : ""
        }
        );


    const [useStateHead, setUseState] = useState([
    {
        id: 0,
        Pet_Name : "",
        Pet_Birthday : "",
        Species : "",
        Breed : "",
        Color : "",
        Pet_Sex : "",
        Spayed_Not : "",
        Vaccine_Status : ""
    }
    ]);

    const [jsonContainer, setJSONContainer] = useState([]);


    const [keyCount, setKeyCount] = useState(0);
    const [PetAddForm, setAddForm] = useState([]);
    const [ FormContainer, setFormContainer] = useState([]);

    const SheetGroup = (key) => {

        console.log("In the Sheet Function")
        console.log("Template: " + template)

        const changeHandled = (event) => { //Function that would only handle the event
            console.log("Change Handled Triggered")
            console.log(event.target.value)
            setUseState({...template, [event.target.name]: event.target.value })
        }

        return <PetInformation formNo={ key } useStateHead={ state } handlechange={ changeHandled }/>
    }

    const handleFormChange = () => {
        console.log("Activated")
        const newUState = {
            id: keyCount,
            Pet_Name : "",
            Pet_Birthday : "",
            Species : "",
            Breed : "",
            Color : "",
            Pet_Sex : "",
            Spayed_Not : "",
            Vaccine_Status : ""
        }

        //const AddInstance = [...prevState, [newUState]]
        setKeyCount(keyCount + 1)
        //setJSONContainer({newUState})
        //setJSONContainer([SheetGroup(keyCount)])
        console.log(keyCount)

        const AddInstance = [...jsonContainer, [newUState]]
        setJSONContainer(AddInstance)
        console.log("Instance Created and Contained")


        const addForm = [...jsonContainer, [jsonContainer]];
        setAddForm(addForm);
        console.log("Add Form Length: " + addForm.length)
        //const addForm = [...PetAddForm, [petFormInit]];
        //addForm(addForm);
    
    }

    const changeHandled = (event) => { //Function that would only handle the event
        console.log("Change Handled Triggered")
        console.log(event.target.value)
        //setUseState({...StateHead, [event.target.name]: event.target.value })
        console.log("Handled!")
    }

    
    const renderPetForm = PetAddForm.map((petform, key) =>
         
        <div className='pet-form-flex' key={key}> 
            <PetInformation useStateHead={ petform } handlechange={ changeHandled }/>
        </div>
    );

    // ================ Console Log ================

    const handleSubmit = (event) => {
        event.preventDefault();
        const addForms = [{SignUpOne, ...useStateHead}]
        setOne(addForms)
        console.log(SignUpOne);
        console.log()
    };

    return(
        <>
        <div className="body-wrap mx-auto">
           <div className="sign-up-form-wrp mx-auto">
                <div className="form-header">
                    <a className='svg-class' href="/LogIn">
                        <span className='arrow-svg-cont'>
                            <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                            <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM28 10.5L2 10.5V13.5L28 13.5V10.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                        <span className="sgnup-txt">
                            Sign Up
                        </span>
                </div>
                <div className="owner-info-cont gen-mg-l gen-mg-r">
                    {/* Owner Information */}
                    <span className="oinfo-txt fin-prop"> Owner Information <Required/> </span> 
                    <div className="s1-p1-cont flx-row h-mg-t">
                        <form className='f-name-cont'>
                            <label className='f-name txt-al-l fin-prop' htmlFor='f-name'> First Name <Required/> </label><br/>
                            <input type="text" id="f-name" name="first_name" className='w-2125 f-style' 
                            value={ SignUpOne.first_name } onChange={ handleChange } required/><br/>
                        </form>
                        <form className='l-name-cont f-mrg-l'>
                            <label className='l-name fin-prop' htmlFor='l-name'> Last Name <Required/> </label><br/>
                            <input type="text" id="l-name" name="Last_Name" className='w-2125 f-style' 
                            value={ SignUpOne.Last_Name } onChange={ handleChange } required/>
                        </form>
                    </div>
                    {/* Address */}
                    <span className='add-txt txt-al-l fin-prop'> Address <Required/> </span><br/>
                    <div className="s1-p2-cont flx-row f-mrg-t-0-5">
                        <form className='add-cont'>
                            <label htmlFor='add-hsn' className='hsn-txt txt-al-l sub-fin-prop'> House Number, Street <Required/> </label><br/>
                            <input type="text" id="add-hsn" name="House_Number" className='add-prop-inp f-style' 
                            value={ SignUpOne.House_Number } onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='sx-cont f-mrg-l'>
                            <label className='sx-drp fin-prop'> Sex <Required/> </label><br/>
                            <select name="Sex" id="select-cont" className='sx-slctor' defaultValue='default' value={ SignUpOne.Sex } onChange={ handleChange }>
                                <option className='wrp' value="default" disabled> Select </option>
                                <option className='wrp' name="Sex" value="Male"> Male </option>
                                <option className='wrp' name="Sex" value="Female"> Female </option>
                            </select>
                        </form>
                    </div>
                    <div className="s1-p3-cont flx-row f-mrg-t-0-5">
                        <form className='city-cont'>
                            <label htmlFor='add-city' className='city-txt txt-al-l sub-fin-prop'> City <Required/> </label><br/>
                            <input type="text" id="add-city" name="City" className='cpz f-style' 
                            value={ SignUpOne.City } onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='prov-cont f-mrg-l'>
                            <label htmlFor='add-prov' className='city-txt sub-fin-prop'> Province <Required/> </label><br/>
                            <input type="text" id="add-prov" name="Province" className='cpz f-style' 
                            value={ SignUpOne.Province} onChange={ handleChange } required/><br></br>
                        </form>
                        <form className='zip-cont f-mrg-l'>
                            <label htmlFor='add-zip' className='city-txt sub-fin-prop'> Zipcode <Required/> </label><br/>
                            <input type="text" id="add-zip" name="Zipcode" className='cpz f-style' 
                            value={ SignUpOne.Zipcode } onChange={ handleChange } required/><br></br>
                        </form>
                    </div>
                    <div className="s1-p4-cont flx-row f-mrg-t-0-5">
                        <form className='em-cont'>
                            <label htmlFor='email-add' className='em-txt txt-al-l fin-prop'> Email Address <Required/> </label><br/>
                            <input type="text" id="email-add" name="Email_Address" className='f-style emdob' 
                            value={ SignUpOne.Email_Address} onChange={ handleChange } required/>
                        </form>
                        <form className='dob-cont f-mrg-l'>
                            <label htmlFor='dob' className='dob-txt txt-al-l fin-prop'> Date of Birth <Required/> </label><br/>
                            <input type="text" id="f-name" name="Birthday" className='f-style emdob'
                            value={ SignUpOne.Birthday } onChange={ handleChange } required/>
                        </form>
                    </div>
                    <form className='phone-cont f-mrg-t-0-5'>
                        <label htmlFor='phone-num' className='dob-txt txt-al-l fin-prop'> Phone <Required/> </label> <br/>
                        <input type="text" id="phone-num" name="Phone" className='f-style w-2125' 
                        value={ SignUpOne.Phone } onChange={ handleChange } required/>
                    </form>
                </div>
                <div className='pet-info-cont gen-mg-l gen-mg-r f-mrg-t'> 
                    { renderPetForm }
                    <pre>{JSON.stringify(SignUpOne, null, 2)}</pre>
                    <div className="add-btn-wrp">
                        <button type="button" className='add-pet-btn' onClick={ handleFormChange }> + Add Pet </button>
                    </div>
                    <div className="sub-btn-wrp mx-auto">
                        <input type='submit' className='submit-btn' onClick={ handleSubmit }/> 
                    </div>

                </div>
           </div>
        </div>
        </>
    );

}



//{formNo, useStateHead, useStateSet, handlechange}
const PetInformation = (useStateHead, handlechange) => {

    return(
        <>
        {/* Pet Information Section */}
        <span className='pet-info-txt txt-al-l fin-prop'> Pet Information <Required/> </span> <br/>
        <span className='pet-fill-txt txt-al-l'> Please fill out for all of your pets! <Required/> </span> <br/>
        <div className="s2-p1-cont flx-row">
            {/* Pet Name Part */}
            <form action="" className="pe-name-cont">
                <label htmlFor='pet-name' className='pet-name-txt txt-al-l fin-prop'> Pet Name <Required/> </label> <br/>
                <input type="text" id="pet-name" name="Pet_Name" className='p-name w-2125 f-style'
                value={ useStateHead.Pet_Name } onChange={ handlechange }/>
            </form>
            {/* Date of Birth Part */}
            <form action="" className="pet-dob-cont f-mrg-l">
                <label htmlFor='pet-dob-inp' className='phone-txt txt-al-l fin-prop'> Date of Birth <Required/> </label> <br/>
                <input type="text" id="pet-dob-inp" name="Pet_Birthday" className='pet-dob-inp w-2125 f-style'
                value={ useStateHead.Pet_Birthday } onChange={ handlechange }/>
            </form>
        </div>
        {/* Species & Breed Section */}
        <div className="s2-p2-cont flx-row h-mg-t">
            {/* Species Part */}
            <form action="" className="spcs-cont">
                <span className='txt-al-l fin-prop'> Species <Required/> </span> <br/>
                <input type="radio" id="spcs-canine" name="Species"  checked={ useStateHead.Species === 'Canine'} value="Canine" onChange={ handlechange }/>
                    <label htmlFor='spcs-canine' className='can-txt spc-l choices-prop'> Canine  </label>
                <input type="radio" id="spcs-feline" name="Species" className='f-mrg-l' checked={ useStateHead.Species === 'Feline'} value="Feline" onChange={ handlechange }/>
                    <label htmlFor="spcs-others" className='fel-txt spc-l choices-prop'> Feline </label>
                <input type="radio" id="spcs-others" name="Species" className='f-mrg-l' value={ useStateHead.Species } onChange={ handlechange }/>
                <input htmlFor="spcs-others" type="text" placeholder="Others" id="spcs-others" name="species-specify" className='others-specified f-style spc-l' onChange={ handlechange }/>
            </form>
            {/* Breed Part */}
            <form action="" className="breed-cont f-mrg-l">
                <span className='brd-txt txt-al-l fin-prop'> Breed <Required/> </span> <br/>
                <input type="text" id="breed-name" name="Breed" className='f-style'
                value={ useStateHead.Breed } onChange={ handlechange }/>
            </form>
        </div>
        {/* Pet Color & Pet Sex Section */}
        <div className="s2-p3-cont flx-row h-mg-t">
            {/* Pet Color */}
            <form action="" className="pet-color-cont">
                <span className='pet-color-txt txt-al-l fin-prop'> Color <Required/> </span> <br/>
                <input type="text" id="pet-color" name="Color" className='w-2125 f-style'
                value={ useStateHead.Color } onChange={ handlechange }/>
            </form>
            {/* Pet Sex Form Part */}
            <form action="" className="pet-sex-cont f-mrg-l">
                <span className='sx-txt txt-al-l fin-prop'> Sex <Required/> </span> <br/>
                <input type="radio" id="html" name="Pet_Sex" checked={ useStateHead.Pet_Sex === 'Male'} value="Male" onChange={ handlechange }/>
                    <label className='ps-mal spc-l choices-prop' htmlFor='ps-male'> Male  </label>
                <input type="radio" id="ps-female" name="Pet_Sex" className='spc-l' checked={ useStateHead.Pet_Sex === 'Female'} value="Female" onChange={ handlechange }/>
                    <label className='ps-fem spc-l choices-prop' htmlFor='ps-female'> Female </label>
            </form>
        </div>
        {/* Spayed & Vaccine Section */}
        <div className="s2-p4-cont flx-row h-mg-t">
            {/* Spayed/Neutered Question Part */}
            <form action="" className="san-question-cont">
                <span className='san-txt txt-al-l fin-prop'> Spayed/Neutered? <Required/> </span> <br/>
                <input type="radio" id="san-yes" name="Spayed_Not" checked={ useStateHead.Spayed_Not === 'Yes'} value="Yes" onChange={ handlechange }/>
                    <label className='san-yes spc-l choices-prop' htmlFor='san-yes'> Yes </label>
                <input type="radio" id="san-no" name="Spayed_Not" className='f-mrg-l' checked={ useStateHead.Spayed_Not === 'No'} value="No" onChange={ handlechange }/>
                    <label className='san-no spc-l choices-prop' htmlFor='san-no'> No </label>
            </form>
            {/* Vaccine Question Part */}
            <form action="" className="vaccine-question-cont"> 
                <span className='vaccine-q fin-prop'> Is your pet currently up to date on vaccines? <Required/> </span> <br/>
                <input type="radio" id="vaccine-yes" name="Vaccine_Status" checked={ useStateHead.Vaccine_Status === 'Yes'} value="Yes" onChange={ handlechange }/>
                    <label className='v-yes spc-l choices-prop' htmlFor='vaccine-yes'> Yes </label>                
                <input type="radio" id="vaccine-no" name="Vaccine_Status" className='f-mrg-l' checked={ useStateHead.Vaccine_Status === 'No'} value="No" onChange={ handlechange }/>
                    <label id='v-no' className="v-no spc-l choices-prop" htmlFor='vaccine-no'> No </label>
                <input type="radio" id="vaccine-unknown" name="Vaccine_Status"className='f-mrg-l' checked={ useStateHead.Vaccine_Status === 'Unknown'} value="Unknown" onChange={ handlechange }/>
                    <label className='v-ukn spc-l choices-prop' htmlFor='vaccine-unknown'> Unknown </label>
            </form>
        </div>
        </>
    );
}
