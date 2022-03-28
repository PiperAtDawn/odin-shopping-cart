import "./style.css";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import CartItem from "../CartItem";

const Cart: React.FC<{display: boolean}> = ({ display }) => {

  const ctxt = useContext(ItemsContext);

  const [items, ] = ctxt ? ctxt.itemsState : [[], []];
  const addItem = ctxt ? ctxt.addItem : () => {};
  const removeItem = ctxt ? ctxt.removeItem : () => {};

  const generateCart = () => {

    const contents = items.filter(item => item.qty > 0);

    if (contents.length === 0) return "Cart is empty";

    return contents.map(item =>
      <CartItem
        item={item}
        addItem={() => addItem(item, 1)}
        removeItem={() => removeItem(item)}
        removeFully={() => removeItem(item, true)}
      />
    )
  }

  const calculateTotal = () => {
    let total = 0;
    items.forEach(item => {
      total += item.qty * item.price;
    });
    return total;
  }

  return (
    <div className={`cart${display ? "" : " hide"}`}>
      { generateCart() }
      <div className="total-wrapper">
        <span>{`Total: $${calculateTotal()}`}</span>
      </div>
    </div>
  )
}

export default Cart;