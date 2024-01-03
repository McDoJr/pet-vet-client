import '../components_css/ddown_selector.css'


//Single Level JSON File 
export const SexSelect = (props, oc) => {
    
    const option_sex = ["Male", "Female"]

    const renderList = option_sex.map((ddown_map, index) =>
            <option className='wrp' key={ index } value={ ddown_map } > { ddown_map } </option>
    );
    
    return(
        <>
            <label>
            <select name="sex-selection" id="select-cont" className='sx-slctor' defaultValue='default' value={ props } onChange={ oc }>
                <option className='wrp' value="default" disabled> Select </option>
                {renderList}
            </select>
            </label>
        </>

    );
}