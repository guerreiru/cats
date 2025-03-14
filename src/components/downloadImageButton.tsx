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
    link.download = "gato_do_dia.png";
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
