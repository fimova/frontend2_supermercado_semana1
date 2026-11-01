function normalizarTexto(valor = '') {
    const texto = String(valor).trim().replace(/\s+/g, ' ')

    if (!texto) return ''

    const caracteres = Array.from(texto)
    const primeraLetra = caracteres[0].toLocaleUpperCase('es-CL')

    return primeraLetra + caracteres.slice(1).join('')
}

export function normalizarTextoArticulo(valor) {
    return normalizarTexto(valor)
}

export function normalizarArticulo({ nombre = '', marca = '', tipo = '' } = {}) {
    return {
        nombre: normalizarTexto(nombre),
        marca: normalizarTexto(marca),
        tipo: normalizarTexto(tipo),
    }
}