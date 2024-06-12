import { zProduct } from "@/schemas/zFrequent";
import { create } from "zustand";
import { addToCart, removeFromCart } from "../actions/fequentActions";

const useCart = create<{
  count: number;
  wishes: number;
  items: zProduct[];
  wishlist: zProduct[];
  total: number;
  wishlist_total: number;
  total_delivery_price: number;
  cart_open: boolean;
  addItem: (id: string, product: zProduct, quantity: number) => Promise<number>;
  removieItem: (
    id: string,
    product: zProduct,
    quantity: number
  ) => Promise<number>;
  cart_open_toggle: (is:boolean) => void;
  emptyCart: () => void;
  addWish: (id: string, product: zProduct) => void;
  removeWish: (id: string, product: zProduct) => void;
}>((set) => ({
  count: 0,
  wishes: 0,
  items: [],
  total: 0,
  cart_open: false,
  wishlist_total: 0,
  total_delivery_price: 0,
  wishlist: [],
  cart_open_toggle: (is:boolean) => set(() => ({ cart_open: is})),
  addItem: async (id: string, product: zProduct, quantity: number) => {
    //console.log("adding", id, product, quantity);
    return await addToCart(id, product?.id || 0, quantity, "cart").then(
      (res) => {
        set((state: { items: any; count: number; total: number }) => ({
          items: res?.data?.cart?.items || state.items,
          count: state.count + quantity,
          total: res?.data?.cart?.total || state.total,
        }));
        return 0;
      }
    );
  },
  addWish: (id: string, product: zProduct) => {
    addToCart(id, product?.id || 0, 1, "wishlist");
    set((state: { wishlist: any; wishes: number }) => ({
      wishlist: [...state.wishlist, { ...product }],
      wishes: state.wishes + 1,
    }));
    return true;
  },
  removeWish: (id: string, product: zProduct) => {
    removeFromCart(id, product?.id || 0, 1, "wishlist");
    set((state: { wishlist: any; wishes: number }) => ({
      wishlist: [
        ...state.wishlist.filter((i: string) => i !== product?.id.toString()),
      ],
      wishes: state.wishes - 1,
    }));
  },
  removieItem: async (id: string, product: zProduct, quantity: number) => {
    //console.log("removing", id, product, quantity);
    return await removeFromCart(id, product?.id || 0, quantity, "cart").then(
      (res) => {
        set((state: { items: any; count: number }) => ({
          items: [
            ...state.items.filter((i: string) => i !== product?.id.toString()),
          ],
          count: state.count - quantity,
        }));
        return 0;
      }
    );
  },
  emptyCart: () => set({ items: [], count: 0 }),
}));

export default useCart;
