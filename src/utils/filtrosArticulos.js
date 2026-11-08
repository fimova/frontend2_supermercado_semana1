export const TODAS_LAS_CATEGORIAS = 'todas'

export function filtrarArticulosPorTipo(articulos, tipoSeleccionado) {
  if (tipoSeleccionado === TODAS_LAS_CATEGORIAS) {
    return articulos
  }

  return articulos.filter(
    (articulo) => articulo.tipo === tipoSeleccionado,
  )
}