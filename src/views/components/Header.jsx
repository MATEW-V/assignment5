import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="nbar">
            <div className="icon">
                <h2 className="logo">ACI Theatre</h2>
            </div>
            <div className="menu">
                <ul className="navigation">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">HELP</a></li>
                    <li>
                        <div className="search">
                            <div className="searchbox">
                                <input type="text" placeholder="Search..." />
                            </div>
                            <button className="butsearch">Search</button>
                        </div>
                    </li>
                    <li>
                        <div className='buttons'>
                            <div className="register">
                                <Link to={`/register`} className="button">SIGN UP</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='buttons'>
                             <div className="login">
                                <Link to={`/login`} className="button">LOG IN</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;