import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false)

    const toggleHandler = () => {setIsHidden(!isHidden)}

    return (
        <nav className={"navbar"}>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to={"/"}>
                        <img src={logo} alt={"Florida Resort"} />
                    </Link>
                    <button className={"nav-btn"} onClick={toggleHandler}>
                        <AiOutlineMenu className={"nav-icon"}/>
                    </button>
                </div>
                <ul className={isHidden ? "nav-links show-nav" : "nav-links"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/properties"}>Properties</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
