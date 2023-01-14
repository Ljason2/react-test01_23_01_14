import "./data"


import React from "react"

function Button(props){



return(
<>
            <button
            onClick={()=>{
            // console.log('hi')
            props.setColor(window.data.allColor[0])
            }}
            >red</button>
            
            
            <button
            onClick={()=>{
            // console.log('hi')
            props.setColor(window.data.allColor[1])
            }}
            >green</button>
            <button
            onClick={()=>{
            // console.log('hi')
            props.setColor(window.data.allColor[2])
            }}
            >blue</button>
            <button
            onClick={()=>{
            // console.log('hi')
            props.setColor(window.data.allColor[3])
            }}
            >violet</button>
</>

)

}


export default Button;

