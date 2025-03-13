import { getCatAndAdvice } from "@/lib/getCatAndAdvice";
import NotFoundCat from "../assets/404.jpg";

export default async function Home() {
  const { image, advice } = await getCatAndAdvice();

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh md:min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-6 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
        🐱 Gato do Dia
      </h1>

      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col items-center">
        <img
          src={image || NotFoundCat}
          alt="Gato Aleatório"
          className="w-full h-auto rounded-lg shadow-md transition-all duration-300 hover:scale-105"
        />

        <p className="text-lg text-gray-800 font-medium mt-4 text-center italic">
          "{advice}"
        </p>

        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:scale-105"
        >
          🐾 Ver outro gato
        </a>
      </div>
    </div>
  );
}
