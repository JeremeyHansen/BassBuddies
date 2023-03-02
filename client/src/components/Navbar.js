import "../css/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        <span className="site-title">BassBuddy</span><span className="period">.</span>
      </Link>
      <ul className="">
        <CustomLink to="/cities">Cities</CustomLink>
        <CustomLink to="/contact">Submit</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "hvr-underline-from-right"}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
