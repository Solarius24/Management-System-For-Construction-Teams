import React from 'react'
import CheckBoxFilter from './filters/CheckBoxFilter'


//zawiera liste wszystlich filtrow. if statement , jak typ sie zgadza z typem filter config list 
//to filtr jest wyswietlany
//albo switch statement, wybrac te ktore ma lepszy perforamnce

interface AllFiltersData {
  data:string[],
  type:string
}

const AllFilters = (props:AllFiltersData) => {
  return (
    <div>
      <CheckBoxFilter data={props.data} />
    </div>
  )
}

export default AllFilters
