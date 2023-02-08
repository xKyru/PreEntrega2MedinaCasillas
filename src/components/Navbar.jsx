import Navigation from "./Navigation";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="navbar-wrap">
      <div className="container container-sm">
        <div className="nav-container">
          <Navigation/>
        </div>
        <div className="cart-container">
          <CartWidget cartCount={5}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;