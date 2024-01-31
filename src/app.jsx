import { useState } from "react";
import { Layout } from "./components/layout/component";
import { restaurants} from "./mocs/mock"
import { Restaurant } from "./components/restaurant/component";
import { Button } from "./components/button/component";
export const App  = () => {
    const [currentRest, setCurrentRest] = useState(restaurants[0])
   return ( 
    <Layout>
    {restaurants.map((item)=>{
        return <Button onClick={()=>setCurrentRest(item)}>
            {item.name}
        </Button>
    } )}
    <Restaurant info={currentRest}/>
    </Layout>
   );
};
   
 