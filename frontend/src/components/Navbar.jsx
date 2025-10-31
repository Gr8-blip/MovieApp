import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>MovieApp</h2>
      </div>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </div>
  );
}

export default Navbar;
