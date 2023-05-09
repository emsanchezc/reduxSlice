import { createSlice } from "@reduxjs/toolkit";

const categoriasSlice = createSlice({
    name: "categorias",
    initialState: [],
    reducers:{
        agregarCategoria: (state, action) => {
            state.push(action.payload);
        },
        eliminarCategoria: (state, action) => {
            return state.filter(categoria => categoria.id !== action.payload);
        }
    }
});

export const { agregarCategoria, eliminarCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;