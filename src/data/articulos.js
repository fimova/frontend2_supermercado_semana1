function fechaEnDias(dias) {
  const fecha = new Date()
  fecha.setDate(fecha.getDate() + dias)

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0')
  const dia = String(fecha.getDate()).padStart(2, '0')

  return `${anio}-${mes}-${dia}`
}

// IDs fijos para que las URL de detalle de estos artículos sigan funcionando al recargar
export const articulosIniciales = [
  {
    id: '9b52d9c1-4a1e-4fb7-88ea-6d66c04a3e21',
    nombre: 'Leche entera 1L',
    marca: 'La Vaquita',
    tipo: 'Lácteos',
    stock: 24,
    minimo: 10,
    fechaVencimiento: fechaEnDias(5),
  },
  {
    id: '2e8a1f45-7c13-4e9b-9a62-5b4d0c9f1a37',
    nombre: 'Pan molde integral',
    marca: 'PanDelicia',
    tipo: 'Panadería',
    stock: 5,
    minimo: 8,
    fechaVencimiento: fechaEnDias(15),
  },
  {
    id: '6c3d2a80-1f74-4b56-bb90-8e2c41d7f605',
    nombre: 'Manzana roja 1kg',
    marca: 'CampoFresco',
    tipo: 'Frutas y verduras',
    stock: 12,
    minimo: 6,
    fechaVencimiento: fechaEnDias(-2),
  },
]