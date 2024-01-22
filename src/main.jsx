import ReactDOM from 'react-dom/client';
import react from "react";
import { restaurants } from '../mocs/mock';
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(restaurants,restaurants[0],restaurants[0].menu[0])
root.render(
<div className="">
<h1> {restaurants[0].name}</h1>
  <h3>Menu</h3>
  <ul>
  <li>{restaurants[0].menu[0].name} - {restaurants[0].menu[0].price}$</li>
  <li>{restaurants[0].menu[1].name} - {restaurants[0].menu[1].price}$</li>
  <li>{restaurants[0].menu[2].name} - {restaurants[0].menu[2].price}$</li>
  </ul>
  <h3>Reviews</h3>
  <ul>
  <li>{restaurants[0].reviews[0].user} - {restaurants[0].reviews[0].text}</li>
  <li>{restaurants[0].reviews[1].user} - {restaurants[0].reviews[1].text}</li>
  </ul>
  <hr />
  <div className="">
   <h1>{restaurants[1].name}</h1> 
  </div>
  <h3>Menu</h3>
 <ul>
  <li>{restaurants[1].menu[0].name} - {restaurants[1].menu[0].price}$</li>
  <li>{restaurants[1].menu[1].name} - {restaurants[1].menu[1].price}$</li>
  </ul>
  <h3>Reviews</h3>
  <ul>
    <li>{restaurants[1].reviews[0].user} - {restaurants[1].reviews[0].text}</li>
    <li>{restaurants[1].reviews[1].user} - {restaurants[1].reviews[1].text}</li>
    <li>{restaurants[1].reviews[2].user} - {restaurants[1].reviews[2].text} </li>
  </ul>
  <hr />
  <div className="">
  <h1>{restaurants[2].name}</h1> 
  </div>
  <h3>Menu</h3>
  <ul>
  <li>{restaurants[2].menu[0].name} - {restaurants[2].menu[0].price}$ </li>
  <li>{restaurants[2].menu[1].name} - {restaurants[2].menu[1].price}$ </li>
  <li>{restaurants[2].menu[2].name} - {restaurants[2].menu[2].price}$ </li>
  </ul>
  <h3>Reviews</h3>
  <ul>
    <li>{restaurants[2].reviews[0].user} - {restaurants[2].reviews[0].text}</li>
  </ul>
  <hr />
  <div className="">
  <h1>{restaurants[3].name}</h1> 
  </div>
  <h3>Menu</h3>
  <ul>
  <li>{restaurants[3].menu[0].name} - {restaurants[3].menu[0].price}$</li>
  <li>{restaurants[3].menu[1].name} - {restaurants[3].menu[1].price}$</li>
  </ul>
  <h3>Reviews</h3>
  <ul>
    <li>{restaurants[3].reviews[0].user} - {restaurants[3].reviews[0].text}</li>
    <li>{restaurants[3].reviews[1].user} - {restaurants[3].reviews[1].text}</li>
  </ul>
</div>
);

