export const dynamic = "force-dynamic"; // Memaksa SSR agar fetch tidak dianggap statis

import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.jikan.moe/v4";

const Page = async () => {
  let topAnime = null;

  try {
    const response = await fetch(`${BASE_URL}/top/anime?limit=8`, { cache: "no-store" });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    topAnime = await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }

  return (
    <section>
      <Header title="Paling populer" linkTitle="Lihat Semua" linkHref="/populer" />
      {topAnime ? <AnimeList api={topAnime} /> : <p>Gagal memuat data anime.</p>}
    </section>
  );
};

export default Page;
