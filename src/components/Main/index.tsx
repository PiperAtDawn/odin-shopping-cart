import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import { Routes, Route } from "react-router-dom";
import "./style.css";

const Main: React.FC = () => {
  return(
    <main>
      <div className="container">
        <Routes>
          <Route path="/odin-shopping-cart" element={<Home />}/>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </main>
  )
}

export default Main;