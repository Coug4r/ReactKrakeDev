function Empleados({ empleados, onEliminar, onEditar }) {
  return (
    <div>
      <div>
        <h2>Empleados</h2>
        <p>Registros</p>
      </div>
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
                  <button onClick={() => onEditar(emp)}>Editar</button>
                  <button onClick={() => onEliminar(emp)}>Eliminar</button>
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
