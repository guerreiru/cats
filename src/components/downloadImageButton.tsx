"use client";

import { IoIosDownload } from "react-icons/io";
import html2canvas from "html2canvas-pro";

type DownloadImageButtonProps = {
  image: string;
};

export function DownloadImageButton() {
  const handleDownload = async () => {
    const cardElement = document.getElementById("cat-card");
    if (!cardElement) return;

    const canvas = await html2canvas(cardElement, { useCORS: true });
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    const date = new Date();
    const imageName = `gato_do_dia_${date.getDate()}_${
      date.getMonth() + 1
    }_${date.getFullYear()}.png;`;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="cursor-pointer w-full flex items-center justify-center gap-1.5 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-md hover:scale-105"
    >
      <IoIosDownload /> Baixar
    </button>
  );
}
