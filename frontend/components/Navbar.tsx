import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-white shadow-sm justify-center">
      <Link href="/" className="text-blue-600 hover:underline">Salary Predictor</Link>
      <Link href="/fuel" className="text-blue-600 hover:underline">Fuel Efficiency</Link>
      <Link href="/loan" className="text-blue-600 hover:underline">Loan </Link>
      

    </nav>
  );
}