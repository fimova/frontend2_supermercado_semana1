import CampoFormulario from '../components/CampoFormulario'
import MensajeFormulario from '../components/MensajeFormulario'
import { useFormulario } from '../hooks/useFormulario'
import { normalizarTexto } from '../utils/normalizacion'
import { validarFormularioContacto } from '../utils/validaciones'

const valoresIniciales = {
  nombre: '',
  correo: '',
  mensaje: '',
}

function normalizarCampo(nombreCampo, valor) {
  if (nombreCampo === 'nombre') return normalizarTexto(valor)
  if (nombreCampo === 'correo') {
    return String(valor ?? '').trim().toLowerCase()
  }
  if (nombreCampo === 'mensaje') return String(valor ?? '').trim()

  return valor
}

function normalizarDatos(datos) {
  return {
    ...datos,
    nombre: normalizarCampo('nombre', datos.nombre),
    correo: normalizarCampo('correo', datos.correo),
    mensaje: normalizarCampo('mensaje', datos.mensaje),
  }
}

function Contacto() {
  const {
    valores,
    errores,
    mensaje,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormulario({
    valoresIniciales,
    validar: validarFormularioContacto,
    normalizarValores: normalizarDatos,
    normalizarCampo,
    onEnviarValido: () => ({
      tipo: 'exito',
      texto: 'Mensaje enviado con éxito.', //el mensaje no es enviado a un servidor real
    }),
  })

  return (
    <section className="mx-auto max-w-lg">
      <h1 className="mb-3 text-2xl font-semibold text-sea-pine">
        Contáctanos
      </h1>

      <p className="mb-6 text-slate-700">
        ¿Tienes dudas o quieres probar SuperInventario? Escríbenos:
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <CampoFormulario
          label="Nombre"
          id="nombre"
          name="nombre"
          value={valores.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errores.nombre}
          required
        />

        <CampoFormulario
          label="Correo electrónico"
          id="correo"
          name="correo"
          type="email"
          value={valores.correo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errores.correo}
          required
        />

        <CampoFormulario
          label="Mensaje"
          id="mensaje"
          name="mensaje"
          as="textarea"
          rows={4}
          value={valores.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errores.mensaje}
          required
        />

        <button
          type="submit"
          className="rounded-lg bg-lettuce px-4 py-2 font-semibold text-chocolate transition-colors hover:bg-[#c2cf3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate"
        >
          Enviar mensaje
        </button>
      </form>

      <MensajeFormulario mensaje={mensaje} />
    </section>
  )
}

export default Contacto