import { NavLink } from 'react-router-dom';
import "../styles/Nav.css";

function GroupOption() {
    return ( 
        <>

<section id="sidebar">
    <div className="side-menu-top">    
                <li>
                    <NavLink to={"/Rotoplas"} className='nav' exact activeClassName="active">
                        <span className="text">Rotoplas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Cisterna"} className='nav' exact activeClassName="active">
                        <span className="text">Cisterna</span>
                    </NavLink>
                </li>
    </div>
    </section>

        </>
     );
}

export default GroupOption;