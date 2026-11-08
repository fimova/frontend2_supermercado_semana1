import { useState } from 'react'

export function useFormulario({
    valoresIniciales,
    validar,
    normalizarValores = (valores) => valores,
    normalizarCampo,
    onEnviarValido,
}) {
    const [valores, setValores] = useState(() => ({ ...valoresIniciales }))
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target

        setValores((anteriores) => ({
            ...anteriores,
            [name]: value,
        }))

        setErrores((anteriores) => {
            const siguientes = { ...anteriores }
            delete siguientes[name]
            return siguientes
        })

        setMensaje(null)
    }

    const handleBlur = (e) => {
        if (!normalizarCampo) return

        const { name, value } = e.target
        const valorNormalizado = normalizarCampo(name, value)

        setValores((anteriores) => ({
            ...anteriores,
            [name]: valorNormalizado,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const valoresNormalizados = normalizarValores(valores)
        const nuevosErrores = validar(valoresNormalizados)

        setErrores(nuevosErrores)

        const primerCampoInvalido = Object.keys(nuevosErrores).find(
            (campo) => nuevosErrores[campo],
        )

        if (primerCampoInvalido) {
            setMensaje(null)
            document.getElementById(primerCampoInvalido)?.focus()
            return
        }

        try {
            const resultado = await onEnviarValido(valoresNormalizados)
            setMensaje(resultado)

            if (resultado?.tipo === 'exito') {
                setValores({ ...valoresIniciales }) // solo se limpia tras una respuesta exitosa
                setErrores({})
            }
        } catch {
            setMensaje({
                tipo: 'error',
                texto: 'No se pudo completar el envío. Inténtalo nuevamente.',
            })
        }
    }

    return {
        valores,
        errores,
        mensaje,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}