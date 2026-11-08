import { useReducer } from 'react'
import { normalizarArticulo } from '../utils/articulos'
import { ArticulosContext } from './ArticulosContext.js'
import {
    articulosReducer,
    crearEstadoInicial,
    TIPOS_ACCION,
} from './articulosReducer.js'

export function ArticulosProvider({ children }) {
    const [state, dispatch] = useReducer(
        articulosReducer,
        null,
        crearEstadoInicial,
    )

    const agregarArticulo = (articulo) => {
        const nuevoArticulo = normalizarArticulo({
            ...articulo,
            id: crypto.randomUUID(),
        })

        dispatch({
            type: TIPOS_ACCION.AGREGAR_ARTICULO,
            articulo: nuevoArticulo,
        })
    }

    const agregarAlCarrito = (articuloId) => {
        dispatch({
            type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
            articuloId,
        })
    }

    const incrementarCantidad = (articuloId) => {
        dispatch({
            type: TIPOS_ACCION.INCREMENTAR_CANTIDAD,
            articuloId,
        })
    }

    const disminuirCantidad = (articuloId) => {
        dispatch({
            type: TIPOS_ACCION.DISMINUIR_CANTIDAD,
            articuloId,
        })
    }

    return (
        <ArticulosContext.Provider
            value={{
                articulos: state.articulos,
                carrito: state.carrito,
                agregarArticulo,
                agregarAlCarrito,
                incrementarCantidad,
                disminuirCantidad,
            }}
        >
            {children}
        </ArticulosContext.Provider>
    )
}