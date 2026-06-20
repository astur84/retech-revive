// src/app/layout.tsx
import '../app/globals.css'; // Verifica que la ruta es correcta según tu árbol de archivos

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-bg text-text m-0 min-h-screen"> 
        {children}
      </body>
    </html>
  );
}
