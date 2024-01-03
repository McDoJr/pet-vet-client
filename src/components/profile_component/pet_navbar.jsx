import '../../components_css/profile_components_css/pet_navbar.css'

export const PetNavBar = () => {
    return(
    <>
        <div>
            <nav className="navbar bg-body-custom">
                <div className="navigation-grp">
                    <button className="home-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                        <a className="home-btn btn-txt-gen txt-decor-n" href='/'> Home </a>
                    </button>
                    <button className="ab-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                        <a className="home-btn btn-txt-gen txt-decor-n" href='/'> Schedule </a>
                    </button>
                    <button className="cu-btn-c pr btn-gen" type="button" data-bs-target="#navbarSupportedContent">
                        <a className="home-btn btn-txt-gen txt-decor-n" href='/Appointment'> Book Appointment </a>
                    </button>
                </div>
            </nav>
        </div>
    </>
    );
}