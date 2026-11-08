function CampoFormulario({
    label,
    id,
    name,
    type = 'text',
    as = 'input',
    value,
    onChange,
    onBlur,
    required = false,
    error = '',
    rows = 4,
    opciones = [],
    placeholderOpcion = 'Selecciona una opción',
    ...atributos
}) {
    const clasesCampo = [
        'block w-full rounded-md border bg-white px-3 py-2 text-slate-900',
        'focus:outline-none focus:ring-2',
        error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-slate-300 focus:border-sea-pine focus:ring-sea-pine/20',
    ].join(' ')

    const propiedadesCampo = {
        ...atributos,
        id,
        name,
        value,
        onChange,
        onBlur,
        required,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? `${id}-error` : undefined,
        className: clasesCampo
    }

    let campo

    if (as === 'textarea') {
        campo = <textarea {...propiedadesCampo} rows={rows} />
    } else if (as === 'select') {
        campo = (
            <select {...propiedadesCampo}>
                <option value="">{placeholderOpcion}</option>
                {opciones.map((opcion) => (
                    <option key={opcion} value={opcion}>
                        {opcion}
                    </option>
                ))}
            </select>
        )
    } else {
        campo = <input {...propiedadesCampo} type={type} />
    }

    return (
        <div className="mb-4">
            <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-800">
                {label}
                {required && <span aria-hidden="true"> *</span>}
            </label>

            {campo}

            {error && (
                <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
                    {error}
                </p>
            )}
        </div>
    )
}

export default CampoFormulario