import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import {AiOutlineMenu} from 'react-icons/ai';
import styles from '../styles/Navbar.module.css'
import Button from "react-bootstrap/Button";

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(true)

    const toggleHandler = () => {setIsHidden(!isHidden)}

    return (
        <nav className={styles.nav}>
            <div className="nav-center">
                <div className={styles.header}>
                    <Link to={"/"}>
                        <img src={logo} alt={"Florida Resort"} />
                    </Link>
                    <Button variant={"outline-primary"} onClick={toggleHandler}>
                        <AiOutlineMenu className={"nav-icon"}/>
                    </Button>
                </div>
                <ul className={isHidden ? styles.menu : styles.menu__open}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/properties"}>Properties</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
