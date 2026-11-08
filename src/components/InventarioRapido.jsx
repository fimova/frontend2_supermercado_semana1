import ArticulosTable from './ArticulosTable'

function InventarioRapido({ articulos }) {
    return (
        <section className="rounded-lg border border-black/10 bg-white shadow-sm">
            <div className="p-4">
                <h2 className="mb-4 text-2xl font-medium text-slate-900">
                    Inventario rápido
                </h2>
                <ArticulosTable articulos={articulos} />
            </div>
        </section>
    )
}

export default InventarioRapido