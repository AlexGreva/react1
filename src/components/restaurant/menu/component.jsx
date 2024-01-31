import React from "react";
import { MenuItem } from "./menuItem/component";
export const Menu = ({list}) => {
    console.log(list)
    return (
        <div className=""> 
        <h3>Menu</h3>
        <ul>
            {list.map((item)=>{
        return <li>
            <MenuItem menuItem={item} />
        </li>
    } )}  
        </ul>
       
        </div>
    ) 
}