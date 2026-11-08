import { categorias } from '../data/categorias'
import { esFechaISOValida } from './inventario'

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const formatoNombrePersona = /^[\p{L}][\p{L}\s.'’-]*$/u

const formatoTextoCatalogo =
  /^[\p{L}\p{N}][\p{L}\p{N}\s.'’&()/-]*$/u

function validarTextoCatalogo(valor, etiqueta, minimo, maximo) {
  const texto = String(valor ?? '').trim()

  if (!texto) return `${etiqueta} es obligatorio.`
  if (texto.length < minimo) {
    return `${etiqueta} debe tener al menos ${minimo} caracteres.`
  }
  if (texto.length > maximo) {
    return `${etiqueta} no puede superar ${maximo} caracteres.`
  }
  if (!formatoTextoCatalogo.test(texto)) {
    return `${etiqueta} contiene caracteres no permitidos.`
  }

  return ''
}

function validarCantidad(valor, etiqueta) {
  const texto = String(valor ?? '').trim()

  if (!texto) return `${etiqueta} es obligatorio.`
  if (!/^\d+$/.test(texto)) {
    return `${etiqueta} debe ser un número entero igual o mayor que cero.`
  }
  if (Number(texto) > 1000000) {
    return `${etiqueta} no puede superar 1.000.000.`
  }

  return ''
}

export function validarFormularioContacto(datos) {
  const errores = {}
  const nombre = String(datos.nombre ?? '').trim()
  const correo = String(datos.correo ?? '').trim()
  const mensaje = String(datos.mensaje ?? '').trim()

  if (!nombre) {
    errores.nombre = 'El nombre es obligatorio.'
  } else if (nombre.length < 3) {
    errores.nombre = 'El nombre debe tener al menos 3 caracteres.'
  } else if (!formatoNombrePersona.test(nombre)) {
    errores.nombre = 'Ingresa un nombre válido.'
  }

  if (!correo) {
    errores.correo = 'El correo es obligatorio.'
  } else if (!formatoCorreo.test(correo)) {
    errores.correo = 'Ingresa un correo válido.'
  }

  if (!mensaje) {
    errores.mensaje = 'El mensaje es obligatorio.'
  } else if (mensaje.length < 10) {
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  } else if (mensaje.length > 1000) {
    errores.mensaje = 'El mensaje no puede superar 1.000 caracteres.'
  }

  return errores
}

export function validarFormularioNuevoArticulo(datos) {
  const errores = {}

  const errorNombre = validarTextoCatalogo(
    datos.nombre,
    'El nombre',
    3,
    80,
  )
  const errorMarca = validarTextoCatalogo(
    datos.marca,
    'La marca',
    2,
    50,
  )
  const errorTipo = !datos.tipo
    ? 'Selecciona una categoría.'
    : !categorias.includes(datos.tipo)
      ? 'Selecciona una categoría válida.'
      : ''
  const errorStock = validarCantidad(datos.stock, 'El stock')
  const errorMinimo = validarCantidad(datos.minimo, 'El stock mínimo')

  if (errorNombre) errores.nombre = errorNombre
  if (errorMarca) errores.marca = errorMarca
  if (errorTipo) errores.tipo = errorTipo
  if (errorStock) errores.stock = errorStock
  if (errorMinimo) errores.minimo = errorMinimo

  const fecha = String(datos.fechaVencimiento ?? '').trim()
  if (fecha && !esFechaISOValida(fecha)) {
    errores.fechaVencimiento = 'Ingresa una fecha válida.'
  }

  return errores
}