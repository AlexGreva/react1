import { Menu } from "./menu/component";
import { Reviews } from "./reviews/component";
export const Restaurant= ({info}) => {
  return <div>
    <Reviews estimations={info.reviews}/>
    <h1>{info.name}!</h1>
    <Menu list={info.menu}/>
  </div>;

};
