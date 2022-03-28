import "./style.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return(
    <header>
      <h1>A Great Shop</h1>
      <div className="links">
        <Link to="/odin-shopping-cart">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </header>
  )
}

export default Header;