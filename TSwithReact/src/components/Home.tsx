import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import type { RootState } from "../store";
import { emogisAsync } from "../features/Emogis/EmogiSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value: initialState } = useSelector((state: RootState) => state.emogi);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    // Extract unique categories from the data
    const uniqueCategories = [...new Set(initialState.map((emogi) => emogi.category))];
    setCategories(uniqueCategories);
  }, [initialState]);

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(emogisAsync())}
      >
        Fetch Categories
      </button>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search for a category..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-8">
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {initialState
                .filter((emogi) => emogi.category === category)
                .map((emogi, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow">
                    <div className="font-bold text-xl mb-2">{emogi.name.toUpperCase()}</div>
                    <NavLink to={`/details/${emogi.name}`}>
                      <p className="text-gray-700">{emogi.category}</p>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
