import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import type { RootState } from "../store";
import { emogisAsync } from "../features/Emogis/EmogiSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { value: initialState } = useSelector((state: RootState) => state.emogi);

  return (
    <div className="container mx-auto my-8 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(emogisAsync())}
      >
        Click
      </button>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {initialState.map((emogi, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <div className="font-bold text-xl mb-2">{emogi.name}</div>
            <NavLink to = {`/details/${emogi.name}`}><p className="text-gray-700">{emogi.category}</p></NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
