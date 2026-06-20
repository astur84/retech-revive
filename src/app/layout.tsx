export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Añade esta clase bg-red-500 temporalmente */}
      <body className="bg-red-500">
        {children}
      </body>
    </html>
  );
}
