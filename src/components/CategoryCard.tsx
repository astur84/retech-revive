export default function CategoryCard({ tag, title, desc, color, icon }: any) {
  return (
    <div className="bg-bg-panel border border-white/10 p-6 rounded-md hover:border-white/20 transition-all hover:-translate-y-1">
      <span className="font-mono text-xs text-text-muted uppercase mb-4 block">{tag}</span>
      <div className="text-cyan mb-4" style={{ color: color }}>{icon}</div>
      <h3 className="font-display text-xl uppercase mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-4">{desc}</p>
      <a href="#" className="font-mono text-xs" style={{ color: color }}>Ver hilos →</a>
    </div>
  );
}
