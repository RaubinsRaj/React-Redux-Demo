import { BUY_ICECREAM } from "./icecreamTypes"


const initialIceState = {
    numOfIce: 10
}
const icecreamReducer = (state = initialIceState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIce : state.numOfIce-1
        }
        default : return state
    }

}

export default icecreamReducer