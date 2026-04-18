import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-[#f5f0e6]">
            <Header />
            {/* HERO */}
            <div
                className="relative h-100 bg-cover bg-center"
                style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061')",
                }}
            >
                <div className="absolute inset-0 bg-[#3b2a1a]/70"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-bold text-white">About MealMate 🍽️</h1>
                    <p className="mt-3 text-[#e6cfa7] max-w-xl">
                        Your smart companion for discovering recipes quickly and easily.
                    </p>
                </div>
            </div>

            {/*  INTRO */}
            <div className="text-center py-12 px-6">
                <h2 className="text-3xl font-bold text-[#3b2a1a]">What is MealMate?</h2>

                <p className="max-w-3xl mx-auto mt-4 text-gray-700">
                    At <strong>MealMate</strong>, we believe that cooking should be simple, enjoyable, and accessible 
                    to everyone. Our platform was created to help students, busy individuals, and food lovers quickly 
                    discover meals they can prepare using the ingredients they already have.<br/>Whether you're trying 
                    to cook your first homemade dish or looking for new ideas to expand your meals,
                    MealMate provides smart recipe suggestions, detailed instructions, and helpful insights to make your 
                    cooking experience effortless. Our goal is to save time, reduce food waste, and make everyday cooking
                    more convenient and enjoyable for all users.
                </p>
            </div>

            {/* MISSION */}
            <div className="bg-[#efe6d8] py-10 text-center px-6">
                <h2 className="text-2xl font-bold text-[#3b2a1a]">Our Mission</h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-700">
                    Our mission is to make cooking simple, accessible, and enjoyable for
                    everyone by providing smart recipe recommendations and easy-to-follow
                    instructions.
                </p>
            </div>

            {/* FEATURES */}
            <div className="py-12">
                <h2 className="text-3xl font-bold text-center text-[#3b2a1a] mb-10">What We Offer</h2>

                <div className="grid md:grid-cols-3 gap-8 px-10">

                    <div className="bg-[#efe6d8] p-6 rounded shadow hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-xl font-semibold">🔍 Smart Search</h3>
                        <p className="mt-2 text-gray-600">
                            Search recipes using ingredients or dish names instantly.
                        </p>
                    </div>

                    <div className="bg-[#efe6d8] p-6 rounded shadow hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-xl font-semibold">📡 Live Data</h3>
                        <p className="mt-2 text-gray-600">
                            Fetch real-time recipes using TheMealDB API.
                        </p>
                    </div>

                    <div className="bg-[#efe6d8] p-6 rounded shadow hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-xl font-semibold">❤️ Favorites</h3>
                        <p className="mt-2 text-gray-600">
                            Save your favorite recipes for quick access anytime.
                        </p>
                    </div>

                </div>
            </div>

            {/* OUR STORY SECTION */}
            <div className="grid md:grid-cols-2 gap-10 p-10 items-center">

                {/* LEFT SIDE (TEXT) */}
                <div>
                    <h2 className="text-3xl font-bold text-[#3b2a1a] mb-4"> Our Story </h2>

                    <p className="text-gray-700 mb-4">
                        MealMate started as a simple idea—to make everyday cooking easier.
                        Many people struggle with deciding what to cook using the ingredients
                        they already have, often leading to wasted time and food.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Our mission is to simplify meal planning by providing instant recipe
                        suggestions, clear instructions, and a smooth user experience.
                        We aim to make cooking enjoyable and stress-free for everyone.
                    </p>

                    <p className="text-gray-700">
                        Today, MealMate continues to grow as a smart solution for users who
                        want quick, reliable, and delicious meal ideas at their fingertips.
                    </p>
                </div>

                {/* RIGHT SIDE (STATS BOX — MATCHES YOUR HTML STYLE) */}
                <div className="bg-[#decbb3] p-10 rounded-lg text-center shadow">

                    <h2 className="text-3xl font-bold text-[#3b2a1a]">10,000+</h2>
                    <p className="text-gray-800">Recipes Available</p>

                    <h2 className="text-3xl font-bold text-[#3b2a1a] mt-6">1,000+</h2>
                    <p className="text-gray-800">Active Users</p>

                    <h2 className="text-3xl font-bold text-[#3b2a1a] mt-6">1+</h2>
                    <p className="text-gray-800">Years of Development</p>

                </div>

            </div>

            {/*  TIMELINE */}
            <div className="py-16">
                <h2 className="text-3xl text-center font-bold text-[#3b2a1a] mb-10">Our Journey</h2>

                <div className="relative max-w-5xl mx-auto">

                    <div className="absolute left-1/2 w-1 bg-[#6b5b3e] h-full transform -translate-x-1/2"></div>

                        {/* LEFT */}
                        <div className="flex justify-start mb-10">
                            <div className="w-1/2 pr-6">
                                <div className="bg-[#efe6d8] p-6 rounded shadow">
                                    <h3 className="font-bold">2024</h3>
                                    <p>Project Idea</p>
                                    <p className="text-gray-600">
                                        Identified problem of choosing meals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-end mb-10">
                            <div className="w-1/2 pl-6">
                                <div className="bg-[#efe6d8] p-6 rounded shadow">
                                    <h3 className="font-bold">Mid 2024</h3>
                                    <p>Development</p>
                                    <p className="text-gray-600">
                                        Built using React, Next.js, Tailwind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* LEFT */}
                    <div className="flex justify-start mb-10">
                        <div className="w-1/2 pr-6">
                            <div className="bg-[#efe6d8] p-6 rounded shadow">
                                <h3 className="font-bold">2025</h3>
                                <p>Launch</p>
                                <p className="text-gray-600">
                                    MealMate is ready for users.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Call to Action (CTA) section */}
            <div className="bg-[#6b5b3e] text-white text-center py-12">
                <h2 className="text-3xl font-bold">
                    Ready to Explore Recipes?
                </h2>

                <p className="mt-2">
                    Start discovering meals based on what you have.
                </p>

                <button className="mt-4 bg-white text-[#6b5b3e] px-6 py-2 rounded hover:text-black">
                    <Link href="/">Start Searching</Link>
                </button>
            </div>
            <Footer />
        </div>
    );
}