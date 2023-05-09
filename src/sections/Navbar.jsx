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
                        <Link to="#home-id" className="nav--link" smooth><li className="nav--item">Home</li></Link>
                        <Link to="#features-id" className="nav--link" smooth><li className="nav--item">Features</li></Link>
                        <Link to="#pricing-id" className="nav--link" smooth><li className="nav--item">Plans & Pricing</li></Link>
                        <Link to="#gallery-id" className="nav--link" smooth><li className="nav--item">Gallery</li></ Link>
                        <Link to="#location-id" className="nav--link" smooth><li className="nav--item">Location</li></Link>
                    </div>
                    <div className='flex ml-a'>
                        <Link to="#contact-id" className="nav--link" smooth><li className="nav--item active">Contact</li></Link>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar