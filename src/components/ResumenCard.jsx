function ResumenCard({ resumen }) {
    const { totalArticulos, proximosAVencer, bajoStock } = resumen

    return (
        <div className="rounded-lg border border-black/10 bg-white shadow-sm">
            <div className="p-4">
                <h2 className="mb-2 text-xl font-medium text-slate-900">
                    Resumen de hoy
                </h2>

                <ul className="m-0 list-none space-y-1 p-0 text-slate-800">
                    <li>Artículos en catálogo: {totalArticulos}</li>
                    <li>Próximos a vencer (7 días): {proximosAVencer}</li>
                    <li>Bajo stock: {bajoStock}</li>
                </ul>
            </div>
        </div>
    )
}

export default ResumenCard