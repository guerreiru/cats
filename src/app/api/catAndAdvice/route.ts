import { NextRequest, NextResponse } from "next/server";

const formatDate = (userTimeZone: string = "America/Sao_Paulo") => {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    timeZone: userTimeZone,
  });

  return formatter.format(date).replace(/\//g, "-").replace(",", "");
};

async function getAdvice() {
  const adviceRes = await fetch("https://api.adviceslip.com/advice");
  if (!adviceRes.ok) {
    throw new Error("Erro ao buscar conselho");
  }
  const adviceData = await adviceRes.json();
  return adviceData.slip.advice;
}

async function translateText(text: string, targetLang: string) {
  const encodedText = encodeURIComponent(text);
  const translateRes = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodedText}`
  );
  if (!translateRes.ok) {
    throw new Error("Erro ao traduzir texto");
  }
  const translateData = await translateRes.json();
  return translateData[0].map((t: any) => t[0]).join("");
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userTimeZone = searchParams.get("timezone") || "UTC";

    const date = formatDate(userTimeZone);

    const catImageUrl = `https://cataas.com/cat/says/${date}?filter=mono&fontColor=orange&fontSize=20&width=200&height=200`;
    const catImageRes = await fetch(catImageUrl, {
      headers: { "Content-Type": "image/jpeg" },
      cache: "no-cache",
    });

    if (!catImageRes.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar imagem do gato" },
        { status: 500 }
      );
    }

    let advice = await getAdvice();

    advice = await translateText(advice, "pt");

    return NextResponse.json({ image: catImageUrl, advice });
  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
