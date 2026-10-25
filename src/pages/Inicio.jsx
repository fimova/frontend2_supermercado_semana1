const productos = [
  {
    id: 1,
    nombre: 'Leche entera 1L',
    categoria: 'Lácteos',
    stock: 24,
    minimo: 10,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=L',
  },
  {
    id: 2,
    nombre: 'Pan molde integral',
    categoria: 'Panadería',
    stock: 5,
    minimo: 8,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=P',
  },
  {
    id: 3,
    nombre: 'Manzana roja 1kg',
    categoria: 'Frutas',
    stock: 12,
    minimo: 6,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=M',
  },
]

function Inicio() {
  return (
    <>
      {/* Hero principal */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3">Gestión de Inventario para Supermercado</h1>
          <p className="lead">¡Vista clara de todo el inventario!</p>
          <button className="btn btn-primary btn-lg mt-2">
            Ver inventario
          </button>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Resumen de hoy</h5>
              <ul className="list-unstyled mb-0">
                <li>Productos totales: 1.250</li>
                <li>Próximos a vencer: 32</li>
                <li>Bajo stock: 18</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mini inventario de prueba */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-3">Inventario rápido</h2>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Stock</th>
                  <th>Mínimo</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => {
                  const esBajoStock = producto.stock <= producto.minimo
                  return (
                    <tr
                      key={producto.id}
                      className={esBajoStock ? 'table-warning' : ''}
                    >
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="me-2 rounded"
                            width="40"
                            height="40"
                          />
                          <span>{producto.nombre}</span>
                        </div>
                      </td>
                      <td>{producto.categoria}</td>
                      <td>{producto.stock}</td>
                      <td>{producto.minimo}</td>
                      <td>
                        {esBajoStock ? (
                          <span className="badge bg-warning text-dark">
                            Bajo stock
                          </span>
                        ) : (
                          <span className="badge bg-success">OK</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio