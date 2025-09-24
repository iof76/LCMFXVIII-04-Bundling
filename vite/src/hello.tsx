import { FC, useEffect, useState } from "react";
import config from "./env-config";

export const HelloComponent: FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1_000);

    return () => clearInterval(timer);
  }, []);

  const applyOperation = async () => {
    const { operate } = await import("./math");
    setCounter((prevCounter) => operate(prevCounter));
  };

  const applyOperation2 = async () => {
      const { operate } = await import("./math2");
      setCounter(prevCounter => operate(prevCounter));
  };


 const toggleTheme = () => {
   const html = document.documentElement;
   const isDark = html.getAttribute("data-theme") === "dark";
   if (isDark) html.removeAttribute("data-theme");
   else html.setAttribute("data-theme", "dark");
 };

  return (
    <>
      <h2>Hello from React</h2>
      <p>Api server is {config.API_BASE}</p>
      <p>Feature A is {config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Toggle theme 🎨
      </button>

      <p>Counter state: {counter}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={applyOperation}
      >
        Apply operation
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={applyOperation2}
      >
         Apply operation 2
      </button>
      <a
        href="#"
        className="m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Card title
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </a>
    </>
  );
};