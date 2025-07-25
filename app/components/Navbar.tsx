import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Resumind</p>
      </Link>
      <Link className="primary-button w-fit" to="/upload">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
