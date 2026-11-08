function MensajeFormulario({ mensaje }) {
    if (!mensaje?.texto) return null

    const esExito = mensaje.tipo === 'exito'

    return (
        <div
            role={esExito ? 'status' : 'alert'}
            className={[
                'mt-4 rounded-md border px-4 py-3 text-sm',
                esExito
                    ? 'border-green-200 bg-green-50 text-green-800'
                    : 'border-red-200 bg-red-50 text-red-800',
            ].join(' ')}
        >
            {mensaje.texto}
        </div>
    )
}

export default MensajeFormulario