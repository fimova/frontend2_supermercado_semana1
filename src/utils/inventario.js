const MILISEGUNDOS_POR_DIA = 1000 * 60 * 60 * 24

function obtenerPartesFecha(fechaISO) {
    if (!fechaISO || !/^\d{4}-\d{2}-\d{2}$/.test(fechaISO)) return null

    const [anio, mes, dia] = fechaISO.split('-').map(Number)
    const fecha = new Date(anio, mes - 1, dia)

    // Evita aceptar fechas inexistentes (ej 30 de febrero)
    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() !== mes - 1 ||
        fecha.getDate() !== dia
    ) {
        return null
    }

    return { anio, mes, dia }
}

export function diasHastaVencer(fechaISO) {
    const partes = obtenerPartesFecha(fechaISO)
    if (!partes) return null

    const vencimiento = Date.UTC(partes.anio, partes.mes - 1, partes.dia)

    const hoy = new Date()
    const hoyUTC = Date.UTC(
        hoy.getFullYear(),
        hoy.getMonth(),
        hoy.getDate(),
    )

    return Math.round((vencimiento - hoyUTC) / MILISEGUNDOS_POR_DIA)
}

export function formatearFecha(fechaISO) {
    const partes = obtenerPartesFecha(fechaISO)
    if (!partes) return 'Sin fecha'

    return new Date(
        partes.anio,
        partes.mes - 1,
        partes.dia,
    ).toLocaleDateString('es-CL')
}

export function esFechaISOValida(fechaISO) {
    return obtenerPartesFecha(fechaISO) !== null
}

export function obtenerEstadoVencimiento(fechaISO) {
    const dias = diasHastaVencer(fechaISO)

    if (dias === null) {
        return { texto: 'Sin fecha', clases: 'bg-slate-100 text-slate-700' }
    }

    if (dias < 0) {
        return { texto: 'Vencido', clases: 'bg-red-100 text-red-800' }
    }

    if (dias === 0) {
        return { texto: 'Vence hoy', clases: 'bg-amber-100 text-amber-900' }
    }

    if (dias <= 7) {
        const unidad = dias === 1 ? 'día' : 'días'

        return {
            texto: `Vence en ${dias} ${unidad}`,
            clases: 'bg-amber-100 text-amber-900',
        }
    }

    return { texto: 'En plazo', clases: 'bg-green-100 text-green-800' }
}

export function esBajoStock(articulo) {
    return articulo.stock <= articulo.minimo
}

export function calcularResumenInventario(articulos) {
    return {
        totalArticulos: articulos.length,
        proximosAVencer: articulos.filter((articulo) => {
            const dias = diasHastaVencer(articulo.fechaVencimiento)
            return dias !== null && dias >= 0 && dias <= 7
        }).length,
        bajoStock: articulos.filter(esBajoStock).length
    }
}