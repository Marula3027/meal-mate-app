import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function Home() {
  // STATE
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  // FUNCTION TO FETCH RECIPES
  const fetchRecipes = (query: string) => {
    console.log("Calling API...");
    setLoading(true);

    axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => {
      if (!response.data.meals) {
        setRecipes([]);
        setError("No recipes found!!");
      } else {
        setRecipes(response.data.meals);
        setError(null);
      }

      setLoading(false);
    })
    .catch((error) => {
      console.log("Error occurred:", error);
      setError("Couldn't fetch recipes, try again later!!");
      setLoading(false);
    });
  };

  return (
    <div className="bg-[#f5f0e6]">
      <Header />
      {/*  HERO (MealMate Theme) */}
      <div
        className="relative h-112.5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061')",
        }}
      >
        <div className="absolute inset-0 bg-[#3b2a1a]/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white">
            Welcome to MealMate 🍽️
          </h1>

          <p className="mt-3 text-[#e6cfa7] max-w-xl">
            Discover recipes based on ingredients you already have.
            Cooking made simple and fun!
          </p>
        </div>
      </div>

      {/*  SEARCH */}
      <div className="flex flex-col justify-center mt-8">
        <SearchBar setSearch={fetchRecipes} />
        <div>{loading && (<p className="text-center text-[#a67c52] font-medium italic font-serif ">Loading...</p>)}</div>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}

      {/*  FEATURED RECIPES */}
      <h2 className="text-4xl text-center font-bold text-[#3b2a1a] mt-10">
        Featured Recipes
      </h2>

      {recipes.length === 0 && !loading && !error ? (
        <p className="text-center mt-4 mb-4 text-gray-600">
          Search for recipes to get started 👆
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-6">
          {recipes.map((item) => (
            <RecipeCard
              key={item.idMeal}
              id={item.idMeal}
              title={item.strMeal}
              image={item.strMealThumb}
            />
          ))}
        </div>
      )}

      {/*  CATEGORIES */}
      <div className="bg-[#efe6d8] py-10 text-center">
        <h2 className="text-2xl font-bold text-[#3b2a1a] mb-6">
          Explore Categories
        </h2>

        <div className="flex justify-center gap-10 text-lg text-[#3b2a1a]">
          <div>🍝 Pasta</div>
          <div>🍗 Chicken</div>
          <div>🥗 Healthy</div>
          <div>🍰 Desserts</div>
        </div>
      </div>

      {/*  ABOUT SECTION */}
      <div className="grid md:grid-cols-2 gap-10 p-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#3b2a1a]">
            About MealMate
          </h2>

          <p className="mt-4 text-gray-700">
            MealMate helps you find recipes quickly using ingredients
            you already have. It saves time and makes cooking enjoyable.
          </p>

          <button className="mt-4 bg-[#6b5b3e] text-white px-4 py-2 rounded">
            <Link href="/about">Learn More</Link>
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
          className="rounded shadow"
        />
      </div>
      <Footer />
    </div>
  );
}
