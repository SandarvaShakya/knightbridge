import { useState } from 'react'
import '../styles/navbar.css'

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
                        <li className="nav--item"><a href="/" className="nav--link">Home</a></li>
                        <li className="nav--item"><a href="/" className="nav--link">Features</a></li>
                        <li className="nav--item"><a href="/" className="nav--link">Plans & Pricing</a></li>
                        <li className="nav--item"><a href="/" className="nav--link">Gallery</a></li>
                        <li className="nav--item"><a href="/" className="nav--link">Location</a></li>
                    </div>
                    <div className='flex ml-a'>
                        <li className="nav--item active"><a href="/" className="nav--link">Contact</a></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar