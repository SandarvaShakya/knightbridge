import '../styles/information.css'
import InformationCard from '../components/InformationCard'
import InformationList from '../components/InformationList'
import Heading from '../components/Heading'

const Information = () => {
  return (
    <section className="information">
        <div className="container">
            <Heading 
              title="Information about Knightbridge - Stratford"
              icon="information.svg"
              alt="i"
            />
            <div className="information--content">
              <div className="information--cards">
                <InformationCard 
                  texts={["850 Mornington Street, Stratford, ON"]}
                  img="location.svg"
                  title="Address"
                  alt="location"
                />
                <InformationCard 
                  texts={["TBD"]}
                  img="house.svg"
                  title="Occupancy"
                  alt="house"
                />
                <InformationCard 
                  texts={["Ridgeview Homes"]}
                  img="construction.svg"
                  title="Developed By"
                  alt="blueprint"
                />
                <InformationCard 
                  texts={["N5A 6S2"]}
                  img="postal-code.svg"
                  title="Postal Code"
                  alt="postal-code"
                />
              </div>
              <InformationList
                title="Facts about Knightbridge"
                infos={[
                    "Stormwater Pond", 
                    "Park", 
                    "Easy to access the major highways", 
                    "Shopping", 
                    "Schools", 
                    "Restaurants and many more"
                  ]}
              />
              <InformationList
                title="Features and Finishes"
                infos={[
                    "Extended Bar Top", 
                    "High-Efficiency Furnace", 
                    "Full Brick Exterior", 
                    "Engineered Hardwood or Laminate in Great Room", 
                    "Choice of Air Conditioner or Fireplace", 
                    "Granite Countertops",
                    "9FT. Ceilings on Main Floor",
                    "Heat Recovery System",
                  ]}
                customMarker="information-item-2"
              />
            </div>
        </div>
    </section>
  )
}

export default Information