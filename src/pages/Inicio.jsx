import { productos } from '../data/productos'
import { calcularResumenInventario } from '../utils/inventario'
import { useArticulos } from '../hooks/useArticulos'
import HeroConResumen from '../components/HeroConResumen'
import InventarioRapido from '../components/InventarioRapido'

function Inicio() {
  const { articulos } = useArticulos()

  const resumenInventario = calcularResumenInventario(productos)

  const resumen = {
    ...resumenInventario,
    totalArticulos: articulos.length,
  }

  return (
    <div className="space-y-6">
      <HeroConResumen resumen={resumen} />
      <InventarioRapido productos={productos} />
    </div>
  )
}

export default Inicio