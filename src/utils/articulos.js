import { normalizarTexto } from './normalizacion'

export function obtenerImagenArticulo(nombre) {
    const inicial =
        Array.from(String(nombre ?? '').trim())[0]?.toLocaleUpperCase('es-CL') ?? '?'

    return `https://placehold.co/80x80/d1de4c/6c3524?text=${encodeURIComponent(inicial)}`
}

export function normalizarArticulo(articulo) {
    const nombre = normalizarTexto(articulo.nombre)

    return {
        ...articulo,
        nombre,
        marca: normalizarTexto(articulo.marca),
        tipo: normalizarTexto(articulo.tipo),
        stock: Number(articulo.stock ?? 0),
        minimo: Number(articulo.minimo ?? 0),
        fechaVencimiento: articulo.fechaVencimiento || null,
        imagen: articulo.imagen || obtenerImagenArticulo(nombre),
    }
}