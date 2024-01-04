import { useState } from "react";
import Button from "./Button";

type Colors = {
  name: string;
  code: string;
};

function App() {
  const [color, setColor] = useState<string>("white");
  const [randColor, setRandColor] = useState<string>("black");

  const colors: Array<Colors> = [
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#00FF00" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Orange", code: "#FFA500" },
    { name: "Purple", code: "#800080" },
    { name: "Pink", code: "#FFC0CB" },
    { name: "Brown", code: "#A52A2A" },
    { name: "Gray", code: "#808080" },
    { name: "Black", code: "#000000" },
  ];

  const generateRandomColor = () => {
    let red: number = Math.floor(Math.random() * 256);
    let green: number = Math.floor(Math.random() * 256);
    let blue: number = Math.floor(Math.random() * 256);

    let col = `rgb(${red},${green},${blue})`;
    setRandColor(col);
    setColor(col);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-700 transition-all "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl border-black border-2 bg-white px-3 py-2 rounded-xl">
            {colors.map(function createColorBtn(items) {
              return (
                <Button
                  key={items.name}
                  title={items.name}
                  color={items.code}
                  getColor={() => setColor(items.code)}
                />
              );
            })}

            <Button
              title="Random Color"
              color={randColor}
              getColor={generateRandomColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
