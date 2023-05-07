import Heading from '../components/Heading'
import '../styles/contact.css'

const Contact = () => {
  return (
    <section className='contact' id='contact-id'>
      <div className="container">
        <Heading 
          title="Contact"
          icon='phone.svg'
          alt="phone"
        />
      </div>
    </section>
  )
}

export default Contact