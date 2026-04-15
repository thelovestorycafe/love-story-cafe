import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload);
            if (existing) {
                existing.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload);
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;