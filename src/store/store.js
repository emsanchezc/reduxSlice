import  { configureStore } from '@reduxjs/toolkit';
import tareasReducer from './slices/tareas/tareasSlice';
import categoriasReducer from './slices/categorias/categoriasSlice';

export default configureStore({
    reducer: {
        tareas: tareasReducer,
        categorias: categoriasReducer,
    }
});