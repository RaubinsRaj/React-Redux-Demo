import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/cake/cakeActions'

function CakeContainer(props) {
  return (
    <div>
        <h2>No. Of Cakes- {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>BuyCake</button>
    </div>
  )
}

const mapStateToProps= (state)=>{
       return {
           numOfCakes: state.noOfCakes
       }
}

const mapDispatchToProps= dispatch =>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

// export default CakeContainer
export default connect(
    mapStateToProps,
    mapDispatchToProps)(CakeContainer)