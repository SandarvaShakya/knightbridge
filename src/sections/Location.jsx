import Heading from "../components/Heading"
import '../styles/location.css'

const Location = () => {
  return (
    <section className='location' id='location-id'>
      <div className="container">
        <Heading
          title="Property Location"
          icon="location.svg"
          alt="location"
        />
        <span className="location-text">850 Mornington Street, Stratford, ON</span>
        <div className="location-img">
          <img src="/images/map.webp" alt="map" />
        </div>
      </div>
    </section>
  )
}

export default Location