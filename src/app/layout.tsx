import './globals.css'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-bg text-text"> {/* Añadimos la clase aquí para probar */}
        {children}
      </body>
    </html>
  );
}
