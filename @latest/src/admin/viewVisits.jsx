
import { NavLink } from "react-router-dom";
import {useState,useEffect} from "react"
import Visits from "./Visit"

function ViewVisits(){
const [visits, setVisits] = useState([])




useEffect(() => {
    fetch("http://localhost:9292/visits")
      .then((r) => r.json())
      .then((visits) => setVisits(visits))
  }, []);

console.log(visits)

    return (
        <div>

<NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934'>
    <button> Back to Home </button>
</NavLink>
           {visits.map(visits => {
            return(
          <Visits
          visits = {visits}
          key={visits.id}
          />)

        })}
        </div>
    )
}

export default ViewVisits;