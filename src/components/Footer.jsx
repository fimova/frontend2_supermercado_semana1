function Footer() {
  return (
    <footer className="app-footer text-center py-3 mt-auto">
      <div className="container">
        <small>
          © {new Date().getFullYear()} SuperInventario. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer