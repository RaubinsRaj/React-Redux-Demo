import { combineReducers } from "redux";
import { buyCake } from "./cake/cakeActions";
import { buyIcecream } from "./icecream/icecreamAction";

const rootReducer = combineReducers ({
    cake: buyCake,
    iceCream: buyIcecream
})
 export default rootReducer