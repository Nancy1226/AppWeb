import { NavLink } from "react-router-dom";

function OptionNav() {
    return ( 
    <>
    <section id="sidebar">
    <ul className="side-menu top">    
                <li>
                    <NavLink to={"/Rotoplas"} className='nav' exact activeClassName="active">
                        {/* <i className='iconsR'><Icon src={images.homeIcon} /></i> */}
                        {/* <i className='icons'><Icon src={images.homeIconB} /></i> */}
                        <span className="text">Inicio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Rotoplas"} className='nav' exact activeClassName="active">
                        {/* <i className='iconsR'><Icon src={images.pilotajesIcon} /></i> */}
                        {/* <i className='icons'><Icon src={images.pilotajesIconB} /></i> */}
                        <span className="text">Pilotajes</span>
                    </NavLink>
                </li>
    </ul>
    </section>
        
    </>
     );
}

export default OptionNav;