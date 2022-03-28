import { ItemType } from "../../types/item";
import "./style.css";

type CartItemProps = {
  item: ItemType,
  addItem: () => void,
  removeItem: () => void,
  removeFully: () => void
}

const CartItem: React.FC<CartItemProps> = ({ item, addItem, removeItem, removeFully }) => {

  return(
    <div className="cart-item">
      <div className="col1">
        <span>{ `${item.name}: ` }</span>
        <span>{ `$${item.price * item.qty}` }</span>
      </div>
      <div className="cart-buttons col1">
        <button
          type="button"
          onClick={removeItem}
        >
          -
        </button>
        <span>{ item.qty }</span>
        <button
          type="button"
          onClick={addItem}
        >
          +
        </button>
        <button
          type="button"
          onClick={removeFully}
        >
          x
        </button>
      </div>
    </div>
  )
}

export default CartItem;