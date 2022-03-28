import React, { useState, createContext } from "react";
import { ItemType } from "../types/item";

type ItemsType = ItemType[];

const defaultItems: ItemsType = [
  {
    id: 0,
    name: "Monitor",
    img: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 100,
    qty: 0
  },
  {
    id: 1,
    name: "Keyboard",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
    price: 20,
    qty: 0
  },
  {
    id: 2,
    name: "Mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    price: 10,
    qty: 0
  }
];

type ItemsContextType = {
  itemsState: [ItemsType, React.Dispatch<React.SetStateAction<ItemsType>>],
  addItem: (newItem: ItemType, newQty: number) => void,
  removeItem: (newItem: ItemType, fully?: boolean) => void
};

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider: React.FC<{}> = ({ children }) => {

  const [items, setItems] = useState<ItemsType>(defaultItems);

  const addItem = (newItem: ItemType, newQty = 1) => {
    setItems(items.map(item => 
      item.id === newItem.id ? { ...item, qty: item.qty + newQty } : item
    ));
  }

  const removeItem = (newItem: ItemType, fully = false) => {
    setItems(items.map(item => 
      item.id === newItem.id ? { ...item, qty: fully ? 0 : item.qty - 1 } : item
    ));
  }

  return(
    <ItemsContext.Provider value={{ itemsState: [items, setItems], addItem, removeItem }}>
      { children }
    </ItemsContext.Provider>
  )
}