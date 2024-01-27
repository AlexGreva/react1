import { Menu } from "./menu/component";
export const Restaurant= ({info}) => {
  return <div>
    <h1>{info.name}!</h1>
    <Menu list={info.menu}/>
  </div>;

};
