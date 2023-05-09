import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <img src="/images/line.png" alt="buildings line" className='building-img'/>
      <footer className='footer'>
        <div className="container flex footer--container">
          <div className="footer--content footer--content-main">
            <h1 className="footer--title">Knightsbridge</h1>
            <p className="footer-description">
              Knightsbridge is a new single family home development 
              by Ridgeview Homes currently in preconstruction at 850 
              Mornington Street, Stratford. Available units range in 
              price from $823,800 to $1,185,800. Knightsbridge has a
              total of 63 units, with 25 quick move-in homes currently 
              for sale. Sizes range from 1450 to 3040 square feet.
            </p>
            <p className="disclaimer">
              We do not represent the builder. All renderings, incentives, 
              pricing are subject to terms & conditions and may change 
              at anytime without notice – see sales representatives for 
              more details. not intended to solicit those under contract 
              with another brokerage.
            </p>
            <p className="copyright">© 2023 Homebaba</p>
          </div>
          <div className="footer--content">
            <h2>Amenities</h2>
            <ul className='footer-list'>
              <li className='footer-item'>Extended Bar Top</li>
              <li className='footer-item'>Full Brick Exterior</li>
              <li className='footer-item'>9FT. Ceilings on Main Floor</li>
              <li className='footer-item'>Choice of Air Conditioner or Fireplace</li>
              <li className='footer-item'>Granite Countertops</li>
              <li className='footer-item'>Heat Recovery System</li>
              <li className='footer-item'>High-Efficiency Furnace</li>
              <li className='footer-item'>Ceramic Tile Throughout</li>
            </ul>
          </div>
          <div className="footer--content">
            <h2>About</h2>
            <ul className='footer-list'>
              <li className='footer-item'>Builder : Ridgeview Homes</li>
              <li className='footer-item'>Architect : Ridgeview Homes</li>
              <li className='footer-item'>Interior : Ridgeview Homes</li>
              <li className='footer-item'>Marketing : Ridgeview Homes</li>
              <li className='footer-item'>Sales : Ridgeview Homes</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer