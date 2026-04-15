import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItem: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { setSelectedItem } = productSlice.actions;
export default productSlice.reducer;