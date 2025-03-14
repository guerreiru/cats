"use client";
import Tilt from "react-parallax-tilt";

type CatCardProps = {
  image: string;
  advice: string;
};

export function CatCard({ advice, image }: CatCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1000}
      gyroscope={true}
      className="w-full max-w-md"
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
  );
}
