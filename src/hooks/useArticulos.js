import { useContext } from 'react'
import { ArticulosContext } from '../context/ArticulosContext.js'

export function useArticulos() {
  const ctx = useContext(ArticulosContext)
  if (!ctx) {
    throw new Error(
      'useArticulos debe usarse dentro de un ArticulosProvider',
    )
  }
  return ctx
}