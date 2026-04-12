import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function FAQ() {
    return (
        <div className="bg-[#f5f0e6] min-h-screen">
            <Header />
            {/*  HERO / TITLE */}
            <div className="text-center py-10">
                <h2 className="text-3xl font-bold text-[#3b2a1a]">
                    Frequently Asked Questions
                </h2>

                <p className="mt-4 max-w-xl mx-auto text-gray-700">
                    Here are some common questions users ask. If you don’t find your
                    answer, feel free to contact us.
                </p>
            </div>

            {/*  FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 pb-10 space-y-6">

                {/* FAQ CARD 1 */}
                <div className="bg-white p-6 rounded shadow transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-[#3b2a1a]">
                        Can I search recipes using ingredients?
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Yes! MealMate allows you to search recipes based on ingredients
                        you already have.
                    </p>
                </div>

                {/* FAQ CARD 2 */}
                <div className="bg-white p-6 rounded shadow transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-[#3b2a1a]">
                        Is MealMate free to use?
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Yes, MealMate is completely free to use for searching and
                        exploring recipes.
                    </p>
                </div>

                {/* FAQ CARD 3 */}
                <div className="bg-white p-6 rounded shadow transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-[#3b2a1a]">
                        Can I save my favorite recipes?
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Yes! You can save your favorite recipes and access them later
                        from the Favorites page.
                    </p>
                </div>

                {/* FAQ CARD 4 */}
                <div className="bg-white p-6 rounded shadow transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-semibold text-[#3b2a1a]">
                        Where does the recipe data come from?
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Recipes are fetched from TheMealDB API, providing real-time
                        data including ingredients, images, and instructions.
                    </p>
                </div>

            </div>

            {/* CONTACT LINK SECTION */}
            <div className="bg-[#efe6d8] py-10 text-center">
                <h3 className="text-xl font-bold text-[#6b5b3e] mb-2">
                    Still have questions?
                </h3>

                <p className="text-gray-700">
                    Visit our <Link href="/contact" className="underline text-amber-950">Contact</Link> page to reach out to us anytime.
                </p>
            </div>
            <Footer />
        </div>
    );
}