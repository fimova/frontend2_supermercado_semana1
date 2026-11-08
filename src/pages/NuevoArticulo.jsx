import CampoFormulario from '../components/CampoFormulario'
import MensajeFormulario from '../components/MensajeFormulario'
import { useArticulos } from '../hooks/useArticulos'
import { useFormulario } from '../hooks/useFormulario'
import { normalizarTexto } from '../utils/normalizacion'
import { validarFormularioNuevoArticulo } from '../utils/validaciones'
import { categorias } from '../data/categorias'

const valoresIniciales = {
    nombre: '',
    marca: '',
    tipo: '',
    stock: '',
    minimo: '',
    fechaVencimiento: '',
}

function normalizarCampo(nombreCampo, valor) {
    if (['nombre', 'marca', 'tipo'].includes(nombreCampo)) {
        return normalizarTexto(valor)
    }

    return String(valor ?? '').trim()
}

function normalizarDatos(datos) {
    return {
        ...datos,
        nombre: normalizarCampo('nombre', datos.nombre),
        marca: normalizarCampo('marca', datos.marca),
        tipo: normalizarCampo('tipo', datos.tipo),
        stock: normalizarCampo('stock', datos.stock),
        minimo: normalizarCampo('minimo', datos.minimo),
        fechaVencimiento: normalizarCampo(
            'fechaVencimiento',
            datos.fechaVencimiento,
        ),
    }
}

function NuevoArticulo() {
    const { agregarArticulo } = useArticulos()

    const formulario = useFormulario({
        valoresIniciales,
        validar: validarFormularioNuevoArticulo,
        normalizarValores: normalizarDatos,
        normalizarCampo,
        onEnviarValido: (datos) => {
            agregarArticulo(datos)

            return {
                tipo: 'exito',
                texto: 'Artículo agregado correctamente al inventario.',
            }
        },
    })

    const { valores, errores, mensaje, handleChange, handleBlur, handleSubmit } =
        formulario

    return (
        <section className="mx-auto max-w-lg">
            <h1 className="mb-3 text-2xl font-semibold text-sea-pine">
                Agregar nuevo artículo
            </h1>

            <p className="mb-6 text-slate-700">
                Completa los datos del artículo que quieres registrar.
            </p>

            <form onSubmit={handleSubmit} noValidate>
                <CampoFormulario
                    label="Nombre del producto"
                    id="nombre"
                    name="nombre"
                    value={valores.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.nombre}
                    required
                />

                <CampoFormulario
                    label="Marca"
                    id="marca"
                    name="marca"
                    value={valores.marca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.marca}
                    required
                />

                <CampoFormulario
                    label="Categoría"
                    id="tipo"
                    name="tipo"
                    as="select"
                    opciones={categorias}
                    placeholderOpcion="Selecciona una categoría"
                    value={valores.tipo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.tipo}
                    required
                />

                <CampoFormulario
                    label="Stock actual"
                    id="stock"
                    name="stock"
                    type="number"
                    min="0"
                    step="1"
                    value={valores.stock}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.stock}
                    required
                />

                <CampoFormulario
                    label="Stock mínimo"
                    id="minimo"
                    name="minimo"
                    type="number"
                    min="0"
                    step="1"
                    value={valores.minimo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.minimo}
                    required
                />

                <CampoFormulario
                    label="Fecha de vencimiento (opcional)"
                    id="fechaVencimiento"
                    name="fechaVencimiento"
                    type="date"
                    value={valores.fechaVencimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errores.fechaVencimiento}
                />

                <button
                    type="submit"
                    className="rounded-lg bg-lettuce px-4 py-2 font-semibold text-chocolate transition-colors hover:bg-[#c2cf3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate"
                >
                    Guardar artículo
                </button>
            </form>

            <MensajeFormulario mensaje={mensaje} />
        </section>
    )
}

export default NuevoArticulo