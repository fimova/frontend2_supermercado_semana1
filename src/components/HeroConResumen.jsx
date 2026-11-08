import { Link } from 'react-router'
import ResumenCard from './ResumenCard'

function HeroConResumen({ resumen }) {

    return (
        <section className="mb-6 grid items-start gap-6 md:grid-cols-2">
            <div>
                <h1 className="mb-4 text-[2.5rem] font-medium leading-tight text-slate-900">
                    Gestión de Inventario para Supermercado
                </h1>

                <p className="mb-4 text-xl font-light text-slate-800">
                    ¡Vista clara de todo el inventario!
                </p>
                <Link
                    to="/inventario/articulos"
                    className="mt-2 inline-block rounded-lg bg-lettuce px-4 py-2 text-xl text-chocolate transition-colors hover:bg-[#c2cf3f]"
                >
                    Ver inventario
                </Link>
            </div>

            <ResumenCard resumen={resumen} />
        </section>
    )
}

export default HeroConResumen