import { ShareAdviceButton } from "@/components/shareAdviceButton";
import { getCatAndAdvice } from "@/lib/getCatAndAdvice";
import NotFoundCat from "../assets/404.jpg";
import { MdOutlineAutorenew } from "react-icons/md";
import { DownloadImageButton } from "@/components/downloadImageButton";

export default async function Home() {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const { image, advice } = await getCatAndAdvice(userTimeZone);

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh md:min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-6 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
        🐱 Gato do Dia
      </h1>

      <div
        className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col items-center"
        id="cat-card"
      >
        <div className="w-full min-h-56 md:min-h-96">
          <img
            src={image || NotFoundCat}
            alt="Gato Aleatório"
            className="w-full rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          />
        </div>
        <p className="text-lg text-gray-800 font-medium mt-4 text-center italic">
          "{advice}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 place-items-center mt-4 md:mt-6 gap-y-2">
        <a
          href="/"
          className="w-full flex items-center justify-center gap-1.5 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:scale-105"
        >
          <MdOutlineAutorenew /> Gerar Novo
        </a>
        <ShareAdviceButton advice={advice} image={image} />
        <DownloadImageButton />
      </div>
    </div>
  );
}
