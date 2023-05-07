import Heading from '../components/Heading'
import Button from '../components/Button'
import '../styles/contact.css'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className='contact' id='contact-id'>
      <div className="container">
        <Heading 
          title="You have Queries ?"
          className="center"
        />
        <span className='ext-text'>Send us a message.</span>
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-element">
            <input type="text" name='full-name' required/>
            <label htmlFor="full-name">Full Name</label>
          </div>
          <div className="form-element">
            <input type="email" name='email' required/>
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-element">
            <input type="tel" name='phone-number' required/>
            <label htmlFor="phone-number">Phone Number</label>
          </div>
          <div className="form-element">
            <textarea name='message'></textarea>
            <label htmlFor="message">Enter Your Message</label>
          </div>
          <Button
            text="Send Message"
            className="btn--center"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact