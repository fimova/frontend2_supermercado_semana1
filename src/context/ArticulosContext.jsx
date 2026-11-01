import { createContext, useState } from 'react'
import { articulosIniciales } from '../data/articulos'
import { normalizarArticulo } from '../utils/formatoArticulo'

export const ArticulosContext = createContext(null)

export function ArticulosProvider({ children }) {
    const [articulos, setArticulos] = useState(() =>
        articulosIniciales.map((articulo) => ({
            ...articulo,
            ...normalizarArticulo(articulo),
        })),
    )

    const agregarArticulo = (datosArticulo) => {
        const nuevoArticulo = {
            id: crypto.randomUUID(),
            ...normalizarArticulo(datosArticulo),
        }

        setArticulos((anteriores) => [...anteriores, nuevoArticulo])
    }

    return (
        <ArticulosContext.Provider value={{ articulos, agregarArticulo }}>
            {children}
        </ArticulosContext.Provider>
    )
}