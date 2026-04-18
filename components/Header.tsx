import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#a89673] text-white text-center py-6 font-(family-name:Times Roman)">
      <h1 className="text-5xl font-bold mb-4 font-serif">MealMate</h1>

      <nav className="flex justify-center gap-8 text-lg">
        <Link href="/" className="relative transition duration-300 hover:text-black">HOME</Link>
        <Link href="/about" className="relative transition duration-300 hover:text-black">ABOUT</Link>
        <Link href="/contact" className="relative transition duration-300 hover:text-black">CONTACT</Link>
        <Link href="/faq" className="relative transition duration-300 hover:text-black">FAQ</Link>
      </nav>
    </header>
  );
}