import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <nav className="navigation">

                <ul className="nav-bar">
                    <li className="logo"><Link to="/"><img src="../../images/mainLogo.png" alt="logo" /></Link></li>

                    <input type="checkbox" id="check" />
                    <span className="menu">
                        <div className="navigation-div">
                            <li><Link to="/catalog">Catalog</Link></li>
                        </div>

                        {isAuthenticated
                            ? (
                                <div className="navigation-div user">
                                    <li><Link to="/addSet">Add set</Link></li>
                                    <li><Link to="#">Logout</Link></li>
                                </div>
                            )
                            : (
                                <div className="navigation-div guest">
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </div>
                            )

                        }

                        <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
                    </span>
                    <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
                </ul>
            </nav>
        </header>
    );
}