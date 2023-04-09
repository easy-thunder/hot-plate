
function Visit({visits}){


return(
    <div>
  <h1> Table #  {visits.table_number}</h1>
<h1>Price Total:  {visits.price_total}</h1>
<p>{visits.items}.</p>
<br></br>

    </div>
)
}

export default Visit;