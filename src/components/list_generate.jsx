//Importing Assets 
import '../components_css/list_generate.css'


export const ListRenderFunc = (jsonhead, jsontarget) => {

    const renderList = jsonhead.jsontarget.map((list_map, index) =>
        <ul className='post-list ml' key={index}>
            <li className='list-post' key={index}> {list_map} </li>
        </ul>
    )

    return <> {renderList} </>
}


//Has parameters of List that has specific properties 

export const ListRenderSpecify = (jsonhead, jsontarget) => {

    const renderList = jsonhead.jsontarget.map((list_map, index) =>
        <ul className='post-list ml' key={index}>
            <li className='list-post' key={index}> 
                <div className="span-wrpper">
                    <span className='jsonprop-one'> 
                        { list_map.list_name + " " } 
                    </span>
                    <span className='jsonprop-two'> 
                        { list_map.list_about } 
                    </span>
                </div>
            </li>
        </ul>
    )

    return <> {renderList} </>
}

// Specified List Render for Specific Object 
export const VaccineListRender = (jsonhead, jsontarget) => {

    const renderList = jsonhead.jsontarget.map((list_map, index) =>
        <ul className='post-list ml' key={index}>
            <li className='list-post' key={index}> 
                <div className="v-span-wrpper">
                    <span className='v-json-prop-1'> 
                        { list_map.bold_text + " "}
                    </span>
                    <span className='v-json-prop-2'> 
                        { list_map.post } 
                    </span>
                </div>
            </li>
        </ul>
    )

    return <> {renderList} </>
}
