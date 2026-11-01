import { useState } from 'react'
import CampoFormulario from '../components/CampoFormulario'
import { validarFormularioContacto } from '../utils/validaciones'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [mensaje, setMensaje] = useState({
    texto: '',
    tipo: '', // 'error' | 'exito' | ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const resultado = validarFormularioContacto(formData)

    setMensaje({
      texto: resultado.mensaje,
      tipo: resultado.tipo,
    })

    if (resultado.tipo === 'exito') {
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
      })
    }
  }

  const claseMensaje =
    mensaje.tipo === 'error'
      ? 'mt-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-800'
      : mensaje.tipo === 'exito'
        ? 'mt-4 rounded-md bg-emerald-100 px-4 py-2 text-sm text-emerald-800'
        : ''

  return (
    <div className="mx-auto max-w-lg">
      <h2 className="mb-3 text-2xl font-semibold text-sea-pine">
        Contáctanos
      </h2>
      <p className="mb-6 text-sm text-gray-700">
        ¿Tienes dudas o quieres probar SuperInventario en tu supermercado?
        Escríbenos:
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <CampoFormulario
          label="Nombre"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <CampoFormulario
          label="Correo electrónico"
          id="correo"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
        />

        <CampoFormulario
          label="Mensaje"
          id="mensaje"
          name="mensaje"
          as="textarea"
          value={formData.mensaje}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primario">
          Enviar mensaje
        </button>
      </form>

      {mensaje.texto && (
        <div className={claseMensaje}>{mensaje.texto}</div>
      )}
    </div>
  )
}

export default Contacto