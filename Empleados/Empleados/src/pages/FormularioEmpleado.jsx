import { useEffect, useState } from "react"

function FormularioEmpleado(OnGuardar, empleadoAEditar, OnCancelar) {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [departamento, setDepartamento] = useState('')
    const [turno, setTurno] = useState('')
    const [activo, setActivo] = useState(false)
    const [fechaIngreso, setFechaIngreso] = useState('')
    const [salario, setSalario] = useState(0)

    useEffect(()=>{
        if(empleadoAEditar!=null & empleadoAEditar != undefined){
            setNombre(empleadoAEditar.nombre)
            setEdad(empleadoAEditar.edad)
            setDepartamento(empleadoAEditar.departamento)
            setTurno(empleadoAEditar.turno)
            setActivo(empleadoAEditar.activo)
            setFechaIngreso(empleadoAEditar.fechaIngreso)
            setSalario(empleadoAEditar.salario)
        }else{
            setNombre('')
            setEdad('')
            setDepartamento('')
            setTurno('')
            setActivo('')
            setFechaIngreso('')
            setSalario('')
        }
    },[empleadoAEditar])

    function ManejarGuardar(){
        const empleado = {
            id: empleadoAEditar !== null && empleadoAEditar !== undefined ? empleadoAEditar.id : Date.now(),
            nombre: nombre,
            edad: Number(edad),
            turno : turno,
            activo :activo,
            fechaIngreso :  fechaIngreso,
            salario : Number(salario)
        }
        OnGuardar(empleado)
    }
    return (
        <div>
            <label >Nombre completo: </label>
            <input type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <label >Edad: </label>
            <input type="text"
                value={nombre}
                onChange={(e) => setEdad(e.target.value)}
            />

            <label>
                Seleciona un Departamento:
                <select
                    value={departamento}>
                    <option value="tecnologia">tecnologia</option>
                    <option value="recursos humanos">recursos humanos</option>
                    <option value="finanzas">finanzas</option>
                    <option value="marketing">marketing</option>
                </select>
            </label>
            <p>
                Seleccione el turno:
                <label>
                    <input type="radio" value="mañana" checked={turno === 'Mañana'}
                        onChange={(e) => setTurno(e.target.value)}
                    />
                    Mañana
                </label>
                <label>
                    <input type="radio" value="tarde" checked={turno === 'Tarde'}
                        onChange={(e) => setTurno(e.target.value)}
                    />
                    Tarde
                </label>
                <label>
                    <input type="radio" value="noche" checked={turno === 'Noche'}
                        onChange={(e) => setTurno(e.target.value)}
                    />
                    Noche
                </label>
            </p>

            <label>
                Estado: <input type="checkbox" checked={activo} 
                onChange={(e)=>setActivo(e.target.checked)}/>
            </label>

            <label >Salario Mensual: </label>
            <input type="text"
                value={nombre}
                onChange={(e) => setSalario(e.target.value)}
            />
            <button onClick={ManejarGuardar}>
                Guardar
            </button>
            <button onClick={OnCancelar}>
                <Calcelar></Calcelar>
            </button>


        </div>
    )
}
export default FormularioEmpleado  