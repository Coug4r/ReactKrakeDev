import { useState } from 'react'
import './App.css'
import data from './data/empleados'
import FormularioEmpleado from './pages/FormularioEmpleado'
import Navbar from './components/Navbar'
import Empleados from './pages/Empleados'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './pages/NoEncontrado'

function App() {
  const [empleados, setEmpleados] = useState(data)

  function agregarEmpleado(empleadoNuevo){
    setEmpleados([...empleados,empleadoNuevo])
  }
  function eliminarEmpleado(id){
    const filtrados = empleados.filter((emp)=> emp.id !==id);
    setEmpleados(filtrados)
  }
  function editarEmpleado(empleadoEditado){
    const actualizados = empleados.map((empleado, index)=>{
      if(empleado.id === empleadoEditado.id){
        return empleadoEditado
      }else{
        return empleado
      }
    })
    setEmpleados(actualizados);
  }

  function manejarGuardar(empleado){
    const existe = empleados.find((emp)=>emp.id === empleado.id)
    if(existe){
      editarEmpleado(empleado)
    }else{
      agregarEmpleado(empleado)
    }
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route
        path='/'
        element={
          <Empleados
            empleados={empleados}
            onEliminar={eliminarEmpleado}
          />
        }
      />
      <Route
        path='/nuevo'
        element={
          <FormularioEmpleado
            onGuardar={manejarGuardar}
          />
        }
      />
      <Route
        path='/editar'
        element={
          <FormularioEmpleado
            onGuardar={manejarGuardar}
          />
        }
      />
      <Route
        path='*'
        element={
          <NotFound/> 
        }
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App
