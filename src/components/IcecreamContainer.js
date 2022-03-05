import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyIcecream} from './redux/icecream/icecreamAction'

function IcecreamContainer() {
   const numOfIcecream = useSelector(state=>state.numOfIce)
   const dispatch = useDispatch()


  return (
    <div>
        <h2>NumOfIceCream- {numOfIcecream}</h2>
        <button onClick={()=>dispatch(buyIcecream())}> BuyIce</button>
    </div>
  )
}

export default IcecreamContainer