import React, {Component} from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {

    
    render() {
        return(
                <nav className="nav-sidebar nav flex-column">
                    <div className="avatar">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        <h2>Kaizuki Z.</h2>
                    </div>
                    <Link to="/" className="Side-MyProject "><i class="bi bi-journal-check"></i> MyProject</Link>
                    <Link to="/aboutme" className="Side-About-me "><i class="bi bi-person-check"></i> About me</Link>
                    <Link to="/contact" className="Side-Contact "><i class="bi bi-telephone-forward"></i> Contact</Link>
                </nav>

        );
    }

}

export default Sidebar;