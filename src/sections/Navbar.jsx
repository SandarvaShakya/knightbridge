import { useState } from 'react'
import '../styles/navbar.css'
import { HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav>
            <div className="container flex">
                <div className="header">
                    <div className="logo"><h2>Knightsbridge</h2></div>
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <img src="/icons/hamburger.svg" alt="menu" />
                    </div>
                </div>
                <ul className={isOpen ? " nav--list nav--list--open flex" : "nav--list flex"}>
                    <div className='flex center'>
                        <li className="nav--item"><Link to="#home-id" className="nav--link" smooth>Home</Link></li>
                        <li className="nav--item"><Link to="#features-id" className="nav--link" smooth>Features</Link></li>
                        <li className="nav--item"><Link to="#pricing-id" className="nav--link" smooth>Plans & Pricing</Link></li>
                        <li className="nav--item"><Link to="#gallery-id" className="nav--link" smooth>Gallery</ Link></li>
                        <li className="nav--item"><Link to="#location-id" className="nav--link" smooth>Location</Link></li>
                    </div>
                    <div className='flex ml-a'>
                        <li className="nav--item active"><Link to="#contact-id" className="nav--link" smooth>Contact</Link></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar