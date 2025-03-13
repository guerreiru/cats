export async function getCatAndAdvice() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/catAndAdvice`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar dados do gato e conselho.");
  }

  return res.json();
}
