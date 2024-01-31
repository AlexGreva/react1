
import React from "react"
export const Reviews=({estimations})=> {
    console.log(estimations,"hyi")
    return (
        <div>
            <ul>
                {estimations.map(item=>{
                    return <li>
                        {item.user}-{item.text}
                    </li>
                } )}
        
            </ul>
        </div>
    )
}