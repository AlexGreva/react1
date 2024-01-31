import { Button } from "../../../button/component"; 
import React, {useState} from "react"
export const MenuItem =({menuItem}) => {
    const [amount, setAmount] = useState(0);
        return (
        <div className="">
            <h3>{menuItem.name}-{menuItem.price}</h3>
            <div>
                <Button onClick={() => setAmount(amount-1)} disabled={amount === 0}>-</Button> 
                
                {amount}
                <Button onClick={() => setAmount(amount+1)} disabled={amount === 5}>+</Button> 
                
            </div>
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
