import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Category = () => {
  const { name } = useParams();
  const { value } = useSelector((state: RootState) => state.emogi);
  const emoji = value.find((emogi) => emogi.name === name);

  if (!emoji) {
    return <div>No emoji found for {name}</div>;
  }

  return (
    <div className="container mx-auto my-8 text-center">
      <div className="bg-white p-8 rounded shadow">
        <div className="font-bold text-3xl mb-4">{emoji.name}</div>
        <div className="text-gray-700 mb-4">{emoji.category}</div>
        <div className="text-gray-500 mb-4">{emoji.group}</div>

        <div className="flex justify-center mb-4">
          {emoji.htmlCode.map((code, index) => (
            <div
              key={index}
              className="mr-2"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          ))}
        </div>

        <div className="flex justify-center mb-4">
          {emoji.unicode.map((unicode, index) => (
            <div
              key={index}
              className="mr-2"
              dangerouslySetInnerHTML={{ __html: unicode }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
