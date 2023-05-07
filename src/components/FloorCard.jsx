import '../styles/pricing.css'

const FloorCard = ({ floor, className }) => {
  return (
    <div className={`floor-card ${className}`}>
      <div className="floor-card--img">
        <img src={`/images/floors/${floor}`} alt="floor-plan" />
      </div>
      <p className="floor-card--text">Knightsbridge</p>
    </div>
  )
}

export default FloorCard