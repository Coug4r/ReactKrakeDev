import { useNavigate } from "react-router-dom"

function Empleados({ empleados, onEliminar}) {
const navigate = useNavigate()
function manejarEditar(emp){
  navigate('/editar',{state:{empleado: emp}});

}

  return (
    <div>
      <div></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Departamento</th>
              <th>Turno</th>
              <th>Activo</th>
              <th>Ingreso</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.nombre}</td>
                <td>{emp.edad}</td>
                <td>{emp.departamento}</td>
                <td>{emp.Turno}</td>
                <td>{emp.Activo ? "Activo" : "Inactivo"}</td>
                <td>{emp.fecha_ingreso}</td>
                <td>{emp.salario}</td>
                <td>
                  <button onClick={()=>manejarEditar(emp)}>Editar</button>
                  <button onClick={() => onEliminar(emp.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Empleados
