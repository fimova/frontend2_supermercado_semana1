function CampoFormulario({
    label,
    id,
    name,
    type = 'text',
    as = 'input',
    value,
    onChange,
    onBlur,
}) {
    const InputTag = as === 'textarea' ? 'textarea' : 'input'

    return (
        <div className="mb-4">
            <label htmlFor={id} className="mb-1 block text-sm font-medium">
                {label}
            </label>

            <InputTag
                id={id}
                name={name}
                type={as === 'textarea' ? undefined : type}
                rows={as === 'textarea' ? 4 : undefined}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
        </div>
    )
}

export default CampoFormulario