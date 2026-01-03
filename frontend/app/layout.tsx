import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Navbar />
        {/* We add pt-16 to prevent the fixed navbar from covering content */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}