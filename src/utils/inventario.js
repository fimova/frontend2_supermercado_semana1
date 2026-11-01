// Devuelve texto + clases Tailwind según días para vencer
export function obtenerEstadoVencimiento(dias) {
    if (dias == null) {
        return {
            texto: 'Sin fecha',
            clases: 'bg-slate-100 text-slate-700',
        }
    }

    if (dias < 0) {
        return {
            texto: 'Vencido',
            clases: 'bg-red-100 text-red-800',
        }
    }

    if (dias === 0) {
        return {
            texto: 'Vence hoy',
            clases: 'bg-amber-100 text-amber-800',
        }
    }

    if (dias <= 7) {
        const unidad = dias === 1 ? 'día' : 'días'
        return {
            texto: `Vence en ${dias} ${unidad}`,
            clases: 'bg-amber-100 text-amber-800',
        }
    }

    const unidad = dias === 1 ? 'día' : 'días'
    return {
        texto: `En ${dias} ${unidad}`,
        clases: 'bg-emerald-100 text-emerald-800',
    }
}

// Calcula el resumen para la tarjeta “Resumen de hoy”
export function calcularResumenInventario(productos) {
    const totalProductos = productos.length

    const proximosAVencer = productos.filter((p) => {
        const d = p.diasParaVencer
        return d != null && d >= 0 && d <= 7
    }).length

    const bajoStock = productos.filter((p) => p.stock <= p.minimo).length

    return {
        totalProductos,
        proximosAVencer,
        bajoStock,
    }
}