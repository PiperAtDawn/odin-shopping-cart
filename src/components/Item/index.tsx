import "./style.css";
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { ItemType } from "../../types/item";

type ItemProps = {
  item: ItemType,
}

const Item: React.FC<ItemProps> = ({ item }) => {

  const ctxt = useContext(ItemsContext);
  const [qty, setQty] = useState(0);

  const addItem = ctxt ? ctxt.addItem : () => {};

  return(
    <div className="item">
      <img src={item.img} alt={item.name} />
      <span>{`$${item.price}`}</span>
      <p>{item.name}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(item, qty);
        }}
      >
        <input
          type="number"
          min="0"
          max="10"
          name="toAdd"
          value={qty}
          onChange={e => setQty(+e.target.value)}
        />
        <button
          type="submit"
        >
          Add to Cart
        </button>
      </form>
    </div>
  )
}

export default Item;