import { ReviewForm } from "../review-form/component";
import { Menu } from "./menu/component";
import { Reviews } from "./reviews/component";
export const Restaurant= ({info}) => {
  return <div>
    <h1>{info.name}!</h1>
    <Menu list={info.menu}/>
    <Reviews estimations={info.reviews}/>
    <ReviewForm/>
  </div>;

};
