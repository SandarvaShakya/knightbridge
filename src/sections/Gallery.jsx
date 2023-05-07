import '../styles/gallery.css'
import Heading from '../components/Heading'

const Gallery = () => {
  return (
    <section className='gallery' id='gallery-id'>
      <div className="container">
        <Heading
          title="Photo Gallery"
          icon="gallery.svg"
          alt="gallery"
        />
        <div className="gallery-container">
          <div className="gallery-img">
            <img src="/images/p5.png" alt="house" loading='lazy'/>
          </div>
          <div className="gallery-img">
            <img src="/images/p4.png" alt="house" loading='lazy'/>
          </div>
          <div className="gallery-img">
            <img src="/images/p3.png" alt="house" loading='lazy'/>
          </div>
          <div className="gallery-img">
            <img src="/images/p2.png" alt="house" loading='lazy'/>
          </div>
          <div className="gallery-img">
            <img src="/images/p1.png" alt="house" loading='lazy'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Gallery