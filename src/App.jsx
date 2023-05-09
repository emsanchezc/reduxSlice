import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { agregarTarea, eliminarTarea } from "./store/slices/tareas/tareasSlice"
import { agregarCategoria, eliminarCategoria } from "./store/slices/categorias/categoriasSlice"


function App() {
  
  const tareas = useSelector((state) => state.tareas);
  const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const agregarTareaNueva = () => {
    dispatch(agregarTarea({ id: Date.now(), nombre: nuevaTarea }))
    setNuevaTarea("");
  };

  const agregarCategoriaNueva = () => {
    dispatch(agregarCategoria({ id: Date.now(), nombre: nuevaCategoria }))
    setNuevaCategoria("");
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTareaNueva}>Agregar tarea</button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre}
            <button onClick={() => dispatch(eliminarTarea(tarea.id))}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h1>Lista de categorias</h1>
      <input 
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
        placeholder="Nueva categoria"
      />
      <button onClick={agregarCategoriaNueva}>Agregar categoria</button>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.nombre}
            <button onClick={() => dispatch(eliminarCategoria(categoria.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
