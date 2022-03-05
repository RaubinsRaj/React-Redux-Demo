import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from './redux/cake/cakeActions'

function HooksCakeContainer() {

    // const numOfCakes = useSelector(state=> state.noOfCakes-1)
    const numOfCakes = useSelector(state=> state.cake.noOfCakes-1)
    const dispatch = useDispatch()
  return (
    <div>
     <h2>numOfCakes- {numOfCakes}</h2>
     <button onClick={()=>dispatch(buyCake())} >BuyCake</button>
    </div>
  )
}

export default HooksCakeContainer