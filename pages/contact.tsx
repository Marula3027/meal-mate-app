import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
    return (
        <div className="bg-[#f5f0e6] min-h-screen">
            <Header />

            <div className="text-center py-10">
                <h2 className="text-3xl font-bold text-[#3b2a1a]">
                    Contact Us
                </h2>

                <p className="mt-4 max-w-xl mx-auto text-gray-700">
                    If you have any questions, feedback, or recipe requests,
                    we’d love to hear from you! Fill out the form below.
                </p>
            </div>

            {/* FORM SECTION */}
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">

                <form className="flex flex-col gap-4">

                    {/* NAME */}
                    <div>
                        <label className="block mb-1 font-semibold">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 border rounded"
                            required
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block mb-1 font-semibold">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded"
                            required
                        />
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="block mb-1 font-semibold">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Type your message..."
                            className="w-full p-3 border rounded"
                            required
                        >Type your message here....</textarea>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="bg-[#6b5b3e] text-white py-3 rounded hover:bg-[#5a4a30]"
                    > Send Message</button>

                </form>
            </div>

            {/* CONTACT INFO (LIKE YOUR HTML) */}
            <div className="text-center mt-10 pb-10  bg-white p-8 rounded shadow">
                <h3 className="text-xl font-bold text-[#6b5b3e] mb-2">Visit Us</h3>

                <p className="text-gray-700">
                    <strong>MealMate</strong> <br />
                    123 Recipe Street, Toronto, ON <br />
                    Phone: (416) 555-1234 <br />
                    Email: info@mealmate.com
                </p>
            </div>
            <Footer />
        </div>
    );
}