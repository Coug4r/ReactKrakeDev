import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "../pages/Empleados_estilos.css"

function FormularioEmpleado({ onGuardar }) {
  const location = useLocation()
  const navigate = useNavigate()
  const empleadoRecuperado = location.state?.empleado || null

  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [departamento, setDepartamento] = useState("")
  const [Turno, setTurno] = useState("")          // 👈 usa la misma propiedad que la tabla
  const [Activo, setActivo] = useState(false)     // 👈 usa la misma propiedad que la tabla
  const [fecha_ingreso, setFechaIngreso] = useState("") // 👈 usa la misma propiedad que la tabla
  const [salario, setSalario] = useState(0)

  useEffect(() => {
    if (empleadoRecuperado) {
      setNombre(empleadoRecuperado.nombre || "")
      setEdad(empleadoRecuperado.edad ?? 0)
      setDepartamento(empleadoRecuperado.departamento || "")
      setTurno(empleadoRecuperado.Turno || "")
      setActivo(empleadoRecuperado.Activo ?? false)
      setFechaIngreso(empleadoRecuperado.fecha_ingreso || "")
      setSalario(empleadoRecuperado.salario ?? 0)
    } else {
      setNombre("")
      setEdad(0)
      setDepartamento("")
      setTurno("")
      setActivo(false)
      setFechaIngreso("")
      setSalario(0)
    }
  }, [empleadoRecuperado])

  function ManejarGuardar() {
    const empleado = {
      id: empleadoRecuperado ? empleadoRecuperado.id : Date.now(),
      nombre,
      edad: Number(edad),
      departamento,
      Turno,          // 👈 coincide con la tabla
      Activo,         // 👈 coincide con la tabla
      fecha_ingreso,  // 👈 coincide con la tabla
      salario: Number(salario),
    }
    onGuardar(empleado)
    navigate("/")
  }

  function ManejarCancelar() {
    navigate("/")
  }

  return (
    <div className="form-container">
      <label>Nombre completo: </label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label>Edad: </label>
      <input
        type="number"
        value={edad.toString()}
        onChange={(e) => setEdad(Number(e.target.value))}
      />

      <label>
        Selecciona un Departamento:
        <select
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        >
          <option value="tecnologia">Tecnología</option>
          <option value="recursos humanos">Recursos Humanos</option>
          <option value="finanzas">Finanzas</option>
          <option value="marketing">Marketing</option>
        </select>
      </label>

      <p>Seleccione el turno:</p>
      <div className="turno-group">
        <label>
          <input
            type="radio"
            value="Mañana"
            checked={Turno === "Mañana"}
            onChange={(e) => setTurno(e.target.value)}
          />
          Mañana
        </label>
        <label>
          <input
            type="radio"
            value="Tarde"
            checked={Turno === "Tarde"}
            onChange={(e) => setTurno(e.target.value)}
          />
          Tarde
        </label>
        <label>
          <input
            type="radio"
            value="Noche"
            checked={Turno === "Noche"}
            onChange={(e) => setTurno(e.target.value)}
          />
          Noche
        </label>
      </div>

      <label>
        Estado:
        <input
          type="checkbox"
          checked={Activo}
          onChange={(e) => setActivo(e.target.checked)}
        />
      </label>

      <label>Fecha de ingreso: </label>
      <input
        type="date"
        value={fecha_ingreso}
        onChange={(e) => setFechaIngreso(e.target.value)}
      />

      <label>Salario Mensual: </label>
      <input
        type="number"
        value={salario.toString()}
        onChange={(e) => setSalario(Number(e.target.value))}
      />

      <button onClick={ManejarGuardar}>Guardar</button>
      <button onClick={ManejarCancelar}>Cancelar</button>
    </div>
  )
}

export default FormularioEmpleado