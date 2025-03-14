"use client";
import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

type CatCardProps = {
  image: string;
  advice: string;
};

export function CatCard({ advice, image }: CatCardProps) {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  return (
    <>
      <Tilt
        tiltMaxAngleX={parallaxEnabled ? 15 : 0}
        tiltMaxAngleY={parallaxEnabled ? 15 : 0}
        perspective={parallaxEnabled ? 1000 : 0}
        transitionSpeed={parallaxEnabled ? 1000 : 0}
        gyroscope={parallaxEnabled ? true : false}
        className="w-full max-w-md"
        tiltEnable={parallaxEnabled}
      >
        <div
          className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col items-center"
          id="cat-card"
        >
          <div className="w-full min-h-56 md:min-h-96">
            <img
              src={image || "../assets/404.jpg"}
              alt="Gato Aleatório"
              id="cat-image"
              className="w-full rounded-lg shadow-md transition-all duration-300 "
            />
          </div>
          <p className="text-lg text-gray-800 font-medium mt-4 text-center italic">
            "{advice}"
          </p>
        </div>
      </Tilt>

      <button
        onClick={() => setParallaxEnabled(!parallaxEnabled)}
        className="fixed bottom-4 right-4 bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-50 hover:opacity-100"
        title={parallaxEnabled ? "Desativar efeito" : "Ativar efeito"}
      >
        3D{" "}
        {parallaxEnabled ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
      </button>
    </>
  );
}
