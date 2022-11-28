import React from 'react'
import { increaseValues, decreaseValues } from '../redux/action-creator'
import { useSelector, useDispatch } from 'react-redux'

export default function Index(){

    const myState = useSelector(state=> state.ourState.count)
    const disPatch = useDispatch()
    console.log("++++ myState++++", myState)
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
        <h1>Hello</h1>
        <button style={{
            backgroundColor : "crimson",
            color: "white",
            padding: "10px 20px"
        }} onClick ={()=>disPatch(increaseValues())}>Increment</button>
        <p>{myState}</p>
        <button style={{
            backgroundColor : "crimson",
            color: "white",
            padding: "10px 20px"
        }}onClick ={()=>disPatch(decreaseValues())}>Decrement</button>
        </div>
       
    )
}
