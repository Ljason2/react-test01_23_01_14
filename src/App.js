
// index.html에서 나가는 것이니까 지금 현 위치에서 들어가야함.
// 오류를 보자.


import "./test01.css"
import Button from "./Button"
import Image from "./Image"
import React from "react"

function App(){

    const [color,setColor] = React.useState('red');

    return(
        <div className="wrap">
            <p>
            <Button 
            setColor={setColor}
            />
            </p>
            <p>
             <Image 
             color ={color}
             />
            </p>
        </div>
        )
}




export default App;