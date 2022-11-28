import * as actionTypes from './action-types'

console.log(actionTypes);
export const increaseValues = () =>{
    return{
        type: actionTypes.INCREMENT
    }   
}

export const decreaseValues = () =>{
    return{
        type: actionTypes.DECREMENT
    }   
}


// {type: "INCREMENT"}