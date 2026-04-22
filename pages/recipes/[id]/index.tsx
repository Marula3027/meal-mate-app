import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


type Recipe = {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(false);

  // GET ID FROM URL
    const getRecipeId = () => {
        const path = window.location.pathname;
        return path.split("/").pop();
    };

    useEffect(() => {
        const id = getRecipeId();

        if (!id) return;

        setLoading(true);

        // FETCH RECIPE DETAILS
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
            setRecipe(res.data.meals[0]);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, []);

    const router = useRouter();

    return (
        <div className="bg-[#f5f0e6] min-h-screen p-10">


            {loading && <p className="text-center">Loading...</p>}

            {recipe && (
                <div className="max-w-4xl mx-auto">

                    {/* TITLE */}
                    <h1 className="text-3xl font-bold text-[#3b2a1a] text-center mb-6 mr-40">
                        {recipe.strMeal}
                    </h1>
                    {/* IMAGE */}
                    <img
                        src={recipe.strMealThumb}
                        className="w-full max-w-md mx-auto rounded mb-6"
                    />

                    {/* INSTRUCTIONS */}
                    <h2 className="text-2xl font-semibold text-[#3b2a1a] mb-2">
                        Instructions
                    </h2>

                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {recipe.strInstructions}
                    </p>

                    <button onClick={() => router.push("/")} 
                        className="btn border rounded-xl p-4 mt-8 bg-amber-100 text-black hover:bg-amber-950 hover:text-white"
                    >
                        Back to home
                    </button>

                </div>
            )}

        </div>
    );
}