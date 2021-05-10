import { Link } from "react-router-dom";
import { navitems } from "../navitems";

const SideBar = () => {
  return (
    <nav id="sidenav">
      {navitems.map((item) => (
        <Link to={item.path} key={item.id} className="nav-items">
          <div className="icon-container">{item.icon}</div>
          <div>{item.title}</div>
        </Link>
      ))}
    </nav>
  );
};

export default SideBar;
