import { useEffect } from "react"

function AlertaNotificacion({ mensaje, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="alerta-notificacion">
      {mensaje}
    </div>
  )
}

export default AlertaNotificacion
