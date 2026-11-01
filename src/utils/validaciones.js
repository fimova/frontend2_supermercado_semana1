const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// VALIDACIÓN FORMULARIO DE CONTACTO 

const reglasValidacionContacto = [
  {
    validar: ({ nombre }) => {
      if (!nombre.trim()) return 'Por favor ingrese su nombre'
      if (nombre.trim().length < 3)
        return 'El nombre debe tener al menos 3 caracteres'
      return null
    },
  },
  {
    validar: ({ correo }) => {
      if (!correo.trim()) return 'El correo no puede estar vacío'
      if (!formatoCorreo.test(correo))
        return 'Por favor ingrese un correo válido'
      return null
    },
  },
  {
    validar: ({ mensaje }) => {
      if (!mensaje.trim()) return 'Por favor escriba su mensaje'
      if (mensaje.trim().length < 10)
        return 'El mensaje debe tener al menos 10 caracteres'
      return null
    },
  },
]

export function validarFormularioContacto(formData) {
  for (const regla of reglasValidacionContacto) {
    const error = regla.validar(formData)
    if (error) {
      return { tipo: 'error', mensaje: error }
    }
  }

  return {
    tipo: 'exito',
    mensaje: '¡Mensaje enviado correctamente!',
  }
}

// VALIDACIÓN FORMULARIO NUEVO ARTÍCULO

const reglasValidacionNuevoArticulo = [
  {
    validar: ({ nombre }) => {
      if (!nombre.trim())
        return 'El nombre del producto es obligatorio.'
      if (nombre.trim().length < 3)
        return 'El nombre debe tener al menos 3 caracteres.'
      return null
    },
  },
  {
    validar: ({ marca }) => {
      if (!marca.trim()) return 'La marca es obligatoria.'
      if (marca.trim().length < 2)
        return 'La marca debe tener al menos 2 caracteres.'
      return null
    },
  },
  {
    validar: ({ tipo }) => {
      if (!tipo.trim()) return 'El tipo de producto es obligatorio.'
      if (tipo.trim().length < 3)
        return 'El tipo de producto debe tener al menos 3 caracteres.'
      return null
    },
  },
]

export function validarFormularioNuevoArticulo(formData) {
  for (const regla of reglasValidacionNuevoArticulo) {
    const error = regla.validar(formData)
    if (error) {
      return { tipo: 'error', mensaje: error }
    }
  }

  return {
    tipo: 'exito',
    mensaje: 'Artículo agregado correctamente al inventario.',
  }
}