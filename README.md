# SuperInventario

Aplicación web para visualizar y gestionar el inventario de un supermercado.

## Funcionalidades

- Listado de artículos con información de stock y vencimiento.
- Filtro de artículos por categoría.
- Vista de detalle para cada artículo.
- Formulario para agregar artículos al inventario.
- Carrito que descuenta del stock las unidades agregadas y las devuelve al disminuir cantidades.
- Diseño adaptable a pantallas de escritorio, tablet y móvil.

## Tecnologías

- React
- Vite
- React Router
- Tailwind CSS v4
- Context y `useReducer` para el estado compartido

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Comandos disponibles

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Estructura del proyecto

- `src/components/`: componentes reutilizables de interfaz.
- `src/context/`: estado global del inventario y del carrito.
- `src/data/`: artículos iniciales y categorías.
- `src/hooks/`: hooks personalizados.
- `src/pages/`: páginas y rutas de la aplicación.
- `src/utils/`: validaciones, filtros, normalización y lógica del inventario.

## Datos y persistencia

Esta versión no usa un backend ni almacenamiento local. El inventario comienza con datos de demostración y los cambios
realizados durante la sesión se reinician al recargar la página. Los artículos iniciales usan IDs fijos para que sus enlaces de
detalle sigan funcionando después de una recarga.

## Publicación

La aplicación se publica en GitHub Pages mediante GitHub Actions.