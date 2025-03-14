"use client";

import { FaXTwitter } from "react-icons/fa6";

type ShareAdviceButton = {
  advice: string;
  image: string;
};

export function ShareAdviceButton({ advice, image }: ShareAdviceButton) {
  const shareAdvice = () => {
    const text = `🐱 Conselho do Gato: \"${advice}\"`;
    const imageUrl = encodeURIComponent(image);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${imageUrl}`;
    window.open(tweetUrl, "_blank");
  };
  return (
    <button
      onClick={shareAdvice}
      className="cursor-pointer w-full flex items-center justify-center gap-1.5 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:scale-105"
    >
      <FaXTwitter /> Compartilhar
    </button>
  );
}
