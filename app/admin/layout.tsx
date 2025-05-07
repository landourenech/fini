
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-red-600 h-screen">

     
        {children}
    </main>
   
  );
}
