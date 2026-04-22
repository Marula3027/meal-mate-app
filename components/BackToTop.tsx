import { useEffect, useState } from "react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } 
            else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-6 right-6 bg-[#6b5b3e] text-white px-4 py-2 rounded-full shadow-lg btn"
        >
            &uarr;
        </button>
    );
}