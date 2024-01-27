import React from "react"
export const MenuItem =({menuItem}) => {
    return (
        <div className="">
            <h3>{menuItem.name}-{menuItem.price}</h3>
            <ul>
                {menuItem.ingredients.map(item=>{
                    return <li>
                        {item}
                    </li>
                } )}
            </ul>
        </div>
    ) 
}