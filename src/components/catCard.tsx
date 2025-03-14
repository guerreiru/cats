"use client";
import { useRef } from "react";
import { MdOutlineAutorenew } from "react-icons/md";
import { ShareAdviceButton } from "./shareAdviceButton";
import { DownloadImageButton } from "./downloadImageButton";
import html2canvas from "html2canvas-pro";
import { IoIosDownload } from "react-icons/io";

type CatCardProps = {
  image: string;
  advice: string;
};

export function CatCard({ advice, image }: CatCardProps) {
  return (
    <>
      <div
        className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col items-center"
        id="cat-card"
      >
        <div className="w-full min-h-56 md:min-h-96">
          <img
            src={image || "../assets/404.jpg"}
            alt="Gato Aleatório"
            id="cat-image"
            className="w-full rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          />
        </div>
        <p className="text-lg text-gray-800 font-medium mt-4 text-center italic">
          "{advice}"
        </p>
      </div>
    </>
  );
}
