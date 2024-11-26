import './Header.css';

function Header() {
    return (
        <div className="nBar">
            <div className="icon">
                <img className="logo" src="ACI_CoA_Colour_3.png" alt="logo" />
                <h2 className="logo">ACI Theatre</h2>
            </div>
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
            </ul>
        </div>
    )
}
export default Header;