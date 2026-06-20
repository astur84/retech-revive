export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#12181a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between py-4">
        <a href="/" className="font-display font-black text-2xl uppercase">
          <span className="text-cyan">RETECH</span> <span className="text-amber">REVIVE</span>
        </a>
        <nav className="hidden md:flex gap-8 font-mono text-xs uppercase text-text-muted">
          <a href="#foro" className="hover:text-cyan">Foro</a>
          <a href="#categorias" className="hover:text-cyan">Categorías</a>
          <a href="#unete" className="bg-amber text-bg px-4 py-2 rounded-sm">Únete</a>
        </nav>
      </div>
    </header>
  );
}
