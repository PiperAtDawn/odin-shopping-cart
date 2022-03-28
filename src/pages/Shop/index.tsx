import "./style.css";
import Item from "../../components/Item";
import Cart from "../../components/Cart";
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const Shop: React.FC = () => {

  const ctxt = useContext(ItemsContext);

  const [items, ] = ctxt ? ctxt.itemsState : [[], []];

  const [displayCart, setDisplayCart] = useState(false);

  const cartBtnHandler = () => {
    setDisplayCart(!displayCart);
  }

  const getCartQty = () => {
    let total = 0;
    items.forEach(item => {
      total += item.qty;
    })
    return total;
  }

  return(
    <div className="shop">
      <div>
        <h2>Shop</h2>
        <div className="items">
          { items.map(item => (
            <Item
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="cart-wrapper">
        <div>
          <button
            type="button"
            onClick={cartBtnHandler}
          >
            {`Cart (${getCartQty()})`}
          </button>
          <Cart display={displayCart} />
        </div>
      </div>
    </div>
  )
}

export default Shop;