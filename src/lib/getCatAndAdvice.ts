export async function getCatAndAdvice() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/catAndAdvice`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar dados do gato e conselho.");
  }

  return res.json();
}
