import '../styles/hero.css'
import Button from '../components//Button'
import { HashLink as Link } from 'react-router-hash-link'

const Hero = () => {
  return (
    <section className='hero' id='home-id'>
        <div className="container">
            <div className="hero--container">
                <div className="hero--content">
                    <h1 className="hero--title">Knightsbridge</h1>
                    <span className='hero--title-ext'>By Ridgeview Homes</span>
                    <h3 className='sub-heading'>Price starting from Low $ 798.8k</h3>
                    <p className='hero--description'>
                        Knightsbridge is a new single family home development by Ridgeview Homes
                        currently in preconstruction at 850 Mornington Street, Stratford.
                        A beautiful place closer to parks, restaurants and many more.
                    </p>
                    <Link to="#features-id" smooth><Button text="Look at the features" className="btn-mt"/></Link>
                </div>
                <div className="hero--img-container">
                    <div className="hero--img">
                        <video autoPlay muted loop poster='/images/p1.png'>
                            <source src="/images/file.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="sub-content--container">
                {/* All three small cards with border at the right */}
                <div className="sub-content">
                    <div className="sub-text">
                        <div className="s-icon">
                            <img src="/icons/house1.svg" alt="house" />
                        </div>
                        <p className="s-number">63</p>
                        <p className="s-text">Units</p>
                    </div>
                    <div className="sub-text">
                        <div className="s-icon">
                            <img src="/icons/man-walk.png" alt="man walking" />
                        </div>
                        <p className="s-number">21</p>
                        <p className="s-text">Walk Score</p>
                    </div>
                    <div className="sub-text">
                        <div className="s-icon">
                            <img src="/icons/bike.svg" alt="bike" />
                        </div>
                        <p className="s-number">47</p>
                        <p className="s-text">Bike Score</p>
                    </div>
                </div>
                {/* Tthe two images at the bottom with the box */}
                <div className="sub-images">
                    <div className="sub-img--container">
                        <div className="box box-1">
                            <div className="sub-icon">
                                <img src="/icons/house1.svg" alt="house" />
                            </div>
                            <h4>The Montague</h4>
                        </div>
                        <div className="sub-img">
                            <img src="/images/p3.png" alt="modeled house" />
                        </div>
                    </div>
                    <div className="sub-img--container">
                        <div className="box box-2">
                            <div className="sub-icon">
                                <img src="/icons/house1.svg" alt="house" />
                            </div>
                            <h4>The Galahad</h4>
                        </div>
                        <div className="sub-img">
                            <img src="/images/p4.png" alt="modeled house" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero