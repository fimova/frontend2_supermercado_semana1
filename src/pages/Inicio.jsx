import { useArticulos } from '../hooks/useArticulos'
import { calcularResumenInventario } from '../utils/inventario'
import HeroConResumen from '../components/HeroConResumen'
import InventarioRapido from '../components/InventarioRapido'

function Inicio() {
  const { articulos } = useArticulos()
  const resumen = calcularResumenInventario(articulos)

  return (
    <div className="space-y-6">
      <HeroConResumen resumen={resumen} />
      <InventarioRapido articulos={articulos} />
    </div>
  )
}

export default Inicio