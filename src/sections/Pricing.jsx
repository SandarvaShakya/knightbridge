import '../styles/pricing.css'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { useState } from 'react'
import FloorCard from '../components/FloorCard'

const Pricing = () => {
  const [active, setActive] = useState("1")
  const [floorPlans, setFloorPlans] = useState(["2bed_1.jpg", "2bed_2.jpg"])

  const handleClick = (event) => {
    setActive(event.target.id)
    if(event.target.id === "1"){
      setFloorPlans(["2bed_1.jpg", "2bed_2.jpg"])
    }else if(event.target.id === "2"){
      setFloorPlans(["3bed_1.jpg", "3bed_2.jpg", "3bed_3.jpg", "3bed_4.jpg", "3bed_5.jpg","3bed_6.jpg"])
    }else if(event.target.id === "3"){
      setFloorPlans(["4bed_1.jpg", "4bed_2.jpg"])
    }

  }

  return (
    <section className='pricing'>
      <div className="container">
        <Heading 
          title="See all available floor plans"
          icon="construction.svg"
          alt="blueprint"
        />
        <div className="buttons">
          <Button
            text="2 BED"
            id="1"
            className={ active === "1" ? "btn--active" : "btn--grey"}
            onClick={handleClick}
          />
          <Button
            text="3 BED"
            id="2"
            className={ active === "2" ? "btn--active" : "btn--grey"}
            onClick={handleClick}
          />
          <Button
            text="4 BED"
            id="3"
            className={ active === "3" ? "btn--active" : "btn--grey"}
            onClick={handleClick}
          />
        </div>
        <div className="floor-plans flex">
          {floorPlans.map((floorPlan, index) => <FloorCard 
            key={index} 
            floor={floorPlan} 
          />)}
        </div>
      </div>
    </section>
  )
}

export default Pricing