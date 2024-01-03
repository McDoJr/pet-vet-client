import '../components_css/navi_dropdowns.css'

export const DropdownMenu = (jsonhead, jsontarget) => {
    const drpdown =  jsonhead.jsontarget.map((dropdownmenu, index) => 
                     <div className='dm-menu'> 
                        <a className='dropdown-item' key={index} href={dropdownmenu.path}> 
                        {dropdownmenu.menu_name} </a>
                     </div>);

    return(
        <div className="dropdown-menu drop-menu-prop" aria-labelledby="navbarDropdownMenuLink">
            {drpdown}
        </div>
    ); 
}
