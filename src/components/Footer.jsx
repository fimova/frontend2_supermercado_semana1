function Footer() {
  return (
    <footer className="mt-auto bg-sea-pine py-4 text-center text-white">
      <div className="mx-auto w-full max-w-6xl px-3">
        <small className="text-sm">
          © {new Date().getFullYear()} SuperInventario. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer
