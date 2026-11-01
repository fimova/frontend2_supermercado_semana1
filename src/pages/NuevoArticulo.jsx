import { useState } from 'react'
import { useArticulos } from '../hooks/useArticulos'
import CampoFormulario from '../components/CampoFormulario'
import { validarFormularioNuevoArticulo } from '../utils/validaciones'
import { normalizarArticulo, normalizarTextoArticulo, } from '../utils/formatoArticulo'

function NuevoArticulo() {
    const { agregarArticulo } = useArticulos()

    const [form, setForm] = useState({
        nombre: '',
        marca: '',
        tipo: '',
    })

    const [mensaje, setMensaje] = useState({
        texto: '',
        tipo: '', // 'error' | 'exito' | ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const articuloNormalizado = normalizarArticulo(form)
        const resultado = validarFormularioNuevoArticulo(articuloNormalizado)

        setMensaje({
            texto: resultado.mensaje,
            tipo: resultado.tipo,
        })

        if (resultado.tipo === 'exito') {
            agregarArticulo(articuloNormalizado)

            setForm({
                nombre: '',
                marca: '',
                tipo: '',
            })
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target

        setForm((anterior) => ({
            ...anterior,
            [name]: normalizarTextoArticulo(value),
        }))
    }

    const claseMensaje =
        mensaje.tipo === 'error'
            ? 'mt-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-800'
            : mensaje.tipo === 'exito'
                ? 'mt-4 rounded-md bg-emerald-100 px-4 py-2 text-sm text-emerald-800'
                : ''

    return (
        <div className="mx-auto max-w-lg">
            <h2 className="mb-3 text-2xl font-semibold text-sea-pine">
                Agregar nuevo artículo
            </h2>
            <p className="mb-6 text-sm text-gray-700">
                Registra un nuevo artículo para que quede disponible en el
                inventario del supermercado.
            </p>

            <form onSubmit={handleSubmit} noValidate>
                <CampoFormulario
                    label="Nombre del producto"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <CampoFormulario
                    label="Marca"
                    id="marca"
                    name="marca"
                    value={form.marca}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <CampoFormulario
                    label="Tipo de producto"
                    id="tipo"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <button type="submit" className="btn-primario">
                    Guardar artículo
                </button>
            </form>

            {mensaje.texto && (
                <div className={claseMensaje}>{mensaje.texto}</div>
            )}
        </div>
    )
}

export default NuevoArticulo