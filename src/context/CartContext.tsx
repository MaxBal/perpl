import { createContext, useContext, useReducer, ReactNode } from "react";
import { ProductData } from "../components/product-options/types";

interface CartItem extends ProductData {
  quantity: number;
  options?: string;
  fixation?: 'none' | 'with';
  fixationDetails?: string[];
  designVersion?: string;
  fixationType?: string;
}

type CartAction = 
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id && 
                item.options === action.payload.options &&
                item.fixationType === action.payload.fixationType
      );
      
      if (existingItemIndex !== -1) {
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...state, action.payload];
    }
    
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.id);
    
    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: action.quantity }
          : item
      );
    
    default:
      return state;
  }
}

const CartContext = createContext<{
  items: CartItem[];
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}