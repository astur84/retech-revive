// src/app/layout.tsx
import './globals.css'; // Asegúrate de importar tu CSS aquí

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
