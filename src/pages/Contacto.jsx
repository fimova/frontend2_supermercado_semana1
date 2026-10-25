import { useState } from 'react'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [mensajeFormulario, setMensajeFormulario] = useState({
    texto: '',
    clase: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { nombre, correo, mensaje } = formData

    // Validar nombre vacío
    if (nombre.trim() === '') {
      setMensajeFormulario({
        texto: 'Por favor ingrese su nombre',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Validar nombre muy corto
    if (nombre.trim().length < 3) {
      setMensajeFormulario({
        texto: 'El nombre debe tener al menos 3 caracteres',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Validar correo vacío
    if (correo.trim() === '') {
      setMensajeFormulario({
        texto: 'El correo no puede estar vacío',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Validar formato de correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formatoCorreo.test(correo)) {
      setMensajeFormulario({
        texto: 'Por favor ingrese un correo válido',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Validar mensaje vacío
    if (mensaje.trim() === '') {
      setMensajeFormulario({
        texto: 'Por favor escriba su mensaje',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Validar mensaje muy corto
    if (mensaje.trim().length < 10) {
      setMensajeFormulario({
        texto: 'El mensaje debe tener al menos 10 caracteres',
        clase: 'alert alert-danger mt-3',
      })
      return
    }

    // Si pasa todas las validaciones
    setMensajeFormulario({
      texto: '¡Mensaje enviado correctamente!',
      clase: 'alert alert-success mt-3',
    })

    // Limpiar formulario
    setFormData({
      nombre: '',
      correo: '',
      mensaje: '',
    })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h2 className="mb-3">Contáctanos</h2>
        <p className="mb-4">
          ¿Tienes dudas o quieres probar SuperInventario en tu supermercado?
          Escríbenos:
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="form-control"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className="form-control"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>

        {/* Renderizado condicional del mensaje debajo del formulario */}
        {mensajeFormulario.texto && (
          <div id="mensajeFormulario" className={mensajeFormulario.clase}>
            {mensajeFormulario.texto}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contacto