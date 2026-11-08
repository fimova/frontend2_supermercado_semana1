export function normalizarTexto(valor = '') {
    const texto = String(valor ?? '').replace(/\s+/g, ' ').trim()

    if (!texto) return ''

    const [primeraLetra, ...resto] = Array.from(texto)

    return primeraLetra.toLocaleUpperCase('es-CL') + resto.join('')
}