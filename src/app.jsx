
import { Layout } from "./components/layout/component";
import { restaurants} from "./mocs/mock"
import { Restaurant } from "./components/restaurant/component";
export const App  = () => {
   return ( 
    <Layout>
    {restaurants.map((item)=>{
        return <Restaurant info={item}/>
    } )}
    </Layout>
   );
};
   
 