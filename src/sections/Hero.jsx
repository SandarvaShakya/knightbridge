import '../styles/hero.css'
import Button from '../components//Button'

const Hero = () => {
  return (
    <section className='hero' id='home-id'>
        <div className="container flex flex--justify">
            <div className="hero--img-container">
                <div className="hero--img">
                    <video autoPlay muted loop poster='/images/p1.png'>
                        <source src="/images/file.mp4" type="video/mp4" />    
                    </video>
                </div>
                <div className="hero--img-ext flex-m flex--justify-m">
                    <div className="ext-img"><img src="/images/p1.png" alt="modeled house" /></div>
                    <div className="ext-img"><img src="/images/p3.png" alt="modeled house" /></div>
                    <div className="ext-img"><img src="/images/p4.png" alt="modeled house" /></div>
                </div>
            </div>
            <div className="hero--content">
                <h1 className="hero--title">Knightsbridge</h1>
                <span className='hero--title-ext'>By Ridgeview Homes</span>
                <h3 className='sub-heading'>Price starting from Low $ 798.8k</h3>
                <p className='hero--description'>
                    Knightsbridge is a new single family home development by Ridgeview Homes
                    currently in preconstruction at 850 Mornington Street, Stratford.
                    A beautiful place closer to parks, restaurants and many more.
                </p>
                <Button text="Look at the features" className="btn-mt"/>
            </div>
        </div>
    </section>
  )
}

export default Hero