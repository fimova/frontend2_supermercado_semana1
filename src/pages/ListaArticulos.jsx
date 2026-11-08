import { useState } from 'react'
import { useArticulos } from '../hooks/useArticulos'
import ArticulosTable from '../components/ArticulosTable'
import { categorias } from '../data/categorias'
import {
    TODAS_LAS_CATEGORIAS,
    filtrarArticulosPorTipo,
} from '../utils/filtrosArticulos'

function ListaArticulos() {
    const { articulos } = useArticulos()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
        TODAS_LAS_CATEGORIAS,
    )

    const articulosFiltrados = filtrarArticulosPorTipo(
        articulos,
        categoriaSeleccionada,
    )

    return (
        <section className="mx-auto max-w-6xl">
            <h1 className="mb-3 text-2xl font-semibold text-sea-pine">
                Artículos disponibles
            </h1>

            <div className="mb-5 max-w-sm">
                <label
                    htmlFor="filtro-categoria"
                    className="mb-1 block text-sm font-medium text-slate-800"
                >
                    Filtrar por categoría
                </label>

                <select
                    id="filtro-categoria"
                    value={categoriaSeleccionada}
                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2"
                >
                    <option value={TODAS_LAS_CATEGORIAS}>Todas las categorías</option>
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>

            <p className="mb-3 text-sm text-slate-600" aria-live="polite">
                Mostrando {articulosFiltrados.length} de {articulos.length} artículos.
            </p>

            {articulosFiltrados.length === 0 ? (
                <p className="rounded-lg border border-black/10 bg-white p-4 text-slate-700">
                    {articulos.length === 0
                        ? 'Aún no hay artículos en el inventario.'
                        : 'No hay artículos en esta categoría.'}
                </p>
            ) : (
                <ArticulosTable articulos={articulosFiltrados} />
            )}
        </section>
    )
}

export default ListaArticulos