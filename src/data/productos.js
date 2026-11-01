// estos productos son solo para el inventario rápido que se muestra página de inicio
// NO se sincronizan con la lista global de artículos del Context

export const productos = [
  {
    id: 1,
    nombre: 'Leche entera 1L',
    categoria: 'Lácteos',
    stock: 24,
    minimo: 10,
    diasParaVencer: 5,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=L',
  },
  {
    id: 2,
    nombre: 'Pan molde integral',
    categoria: 'Panadería',
    stock: 5,
    minimo: 8,
    diasParaVencer: 2,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=P',
  },
  {
    id: 3,
    nombre: 'Manzana roja 1kg',
    categoria: 'Frutas',
    stock: 12,
    minimo: 6,
    diasParaVencer: 12,
    imagen: 'https://placehold.co/80x80/d1de4c/ffffff?text=M',
  },
]