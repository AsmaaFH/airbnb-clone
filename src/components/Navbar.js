import Logo from '../images/airbnb-logo.png';
const Navbar = () => {
  return (
    <nav className="p-3">
      <img src={Logo} className="nav--logo" alt="Logo" />
    </nav>
  );
};

export default Navbar;
