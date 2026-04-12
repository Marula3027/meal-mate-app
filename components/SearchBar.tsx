"use client";
import { useState } from "react";

type Props = {
  setSearch: (value: string) => void;
};

export default function SearchBar({ setSearch }: Props) {
  const [input, setInput] = useState<string>("");

    return (
        <div className="flex justify-center gap-2 my-6">
            <input
                type="text"
                placeholder="Search recipes..."
                className="border p-2 rounded w-64"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={() => setSearch(input)}
                className="bg-[#a67c52] text-white px-4 py-2 rounded"
            >
                Search
            </button>
        </div>
    );
}