// src/components/ResumenCard.jsx

function ResumenCard({ resumen }) {
    const {
        totalProductos,
        proximosAVencer,
        bajoStock,
        totalArticulos,
    } = resumen

    return (
        <div className="rounded-lg border border-black/10 bg-white shadow-sm">
            <div className="p-4">
                <h2 className="mb-2 text-xl font-medium text-slate-900">
                    Resumen de hoy
                </h2>
                <ul className="m-0 list-none p-0 text-slate-800">
                    <li>Productos totales (lotes): {totalProductos}</li>
                    <li>Artículos en catálogo: {totalArticulos}</li>
                    <li>Próximos a vencer (7 días): {proximosAVencer}</li>
                    <li>Bajo stock: {bajoStock}</li>
                </ul>
            </div>
        </div>
    )
}

export default ResumenCard