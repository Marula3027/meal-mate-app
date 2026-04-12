type Props = {
  title: string;
  image: string;
};

export default function RecipeCard({ title, image }: Props) {
    return (
        <div className="bg-[#3b2a1a] text-white p-6 rounded-lg text-center">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded mb-4"
            />

            <h3 className="text-lg font-semibold">{title}</h3>

            <button className="mt-3 bg-[#a67c52] px-4 py-2 rounded">
                View Recipe
            </button>
        </div>
    );
}