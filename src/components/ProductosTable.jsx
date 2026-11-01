import ProductoRow from './ProductoRow'

function ProductosTable({ productos }) {
    return (
        <div className="overflow-x-auto">
            <table className="mb-0 w-full border-collapse text-left text-sm">
                <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                        <th className="px-2 py-2 font-semibold">Producto</th>
                        <th className="px-2 py-2 font-semibold">Categoría</th>
                        <th className="px-2 py-2 font-semibold">Stock</th>
                        <th className="px-2 py-2 font-semibold">Mínimo</th>
                        <th className="px-2 py-2 font-semibold">Vencimiento</th>
                        <th className="px-2 py-2 font-semibold">Estado stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <ProductoRow key={producto.id} producto={producto} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductosTable