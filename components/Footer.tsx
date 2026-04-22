import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#6b5b3e] text-white px-10 py-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 footer-grid">

                <div>
                    <h3 className="font-bold">MealMate</h3>
                    <p>Your trusted recipe companion</p>
                </div>

                <div>
                    <h4 className="font-semibold">Explore</h4>
                    <p><Link href="/" className="relative transition duration-300 hover:text-black">Home</Link></p>
                    <p className="relative transition duration-300 hover:text-black">Recipes</p>
                    <p><Link href="/about" className="relative transition duration-300 hover:text-black">About</Link></p>
          
                </div>

                <div>
                    <h4 className="font-semibold">Categories</h4>
                    <p className="relative transition duration-300 hover:text-black">Pasta</p>
                    <p className="relative transition duration-300 hover:text-black">Chicken</p>
                    <p className="relative transition duration-300 hover:text-black">Healthy</p>
                    <p className="relative transition duration-300 hover:text-black">Desserts</p>
                </div>

                <div>
                    <h4 className="font-semibold">Support</h4>
                    <p><Link href="/contact" className="relative transition duration-300 hover:text-black">Contact</Link></p>
                    <p><Link href="/faq" className="relative transition duration-300 hover:text-black">FAQ</Link></p>
                </div>

            </div>

            <p className="text-center mt-8 text-sm">
                &copy; 2026 MealMate — All Rights Reserved
            </p>
        </footer>

    );
}