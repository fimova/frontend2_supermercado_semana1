import { articulosIniciales } from '../data/articulos'
import { normalizarArticulo } from '../utils/articulos'

export const TIPOS_ACCION = {
    AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    INCREMENTAR_CANTIDAD: 'INCREMENTAR_CANTIDAD',
    DISMINUIR_CANTIDAD: 'DISMINUIR_CANTIDAD',
}

export function crearEstadoInicial() {
    return {
        articulos: articulosIniciales.map(normalizarArticulo),
        carrito: [],
    }
}

// al agregar se descuenta stock
// al disminuir se devuelve una unidad al inventario
export function articulosReducer(state, action) {
    switch (action.type) {
        case TIPOS_ACCION.AGREGAR_ARTICULO:
            return {
                ...state,
                articulos: [...state.articulos, action.articulo],
            }

        case TIPOS_ACCION.AGREGAR_AL_CARRITO:
        case TIPOS_ACCION.INCREMENTAR_CANTIDAD: {
            const articulo = state.articulos.find(
                (item) => item.id === action.articuloId,
            )

            if (!articulo || articulo.stock <= 0) return state

            const lineaExistente = state.carrito.find(
                (linea) => linea.articuloId === action.articuloId,
            )

            return {
                ...state,
                articulos: state.articulos.map((item) =>
                    item.id === action.articuloId
                        ? { ...item, stock: item.stock - 1 }
                        : item,
                ),
                carrito: lineaExistente
                    ? state.carrito.map((linea) =>
                        linea.articuloId === action.articuloId
                            ? { ...linea, cantidad: linea.cantidad + 1 }
                            : linea,
                    )
                    : [
                        ...state.carrito,
                        { articuloId: action.articuloId, cantidad: 1 },
                    ],
            }
        }

        case TIPOS_ACCION.DISMINUIR_CANTIDAD: {
            const lineaExistente = state.carrito.find(
                (linea) => linea.articuloId === action.articuloId,
            )

            if (!lineaExistente) return state

            return {
                ...state,
                articulos: state.articulos.map((item) =>
                    item.id === action.articuloId
                        ? { ...item, stock: item.stock + 1 }
                        : item,
                ),
                carrito:
                    lineaExistente.cantidad === 1
                        ? state.carrito.filter(
                            (linea) => linea.articuloId !== action.articuloId,
                        )
                        : state.carrito.map((linea) =>
                            linea.articuloId === action.articuloId
                                ? { ...linea, cantidad: linea.cantidad - 1 }
                                : linea,
                        ),
            }
        }

        default:
            return state
    }
}