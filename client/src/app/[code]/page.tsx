import GameAuthWrapper from "@/components/game/GameAuthWrapper";
import { fetchActiveGame } from "@/lib/game";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { code: string } }) {
  const game = await fetchActiveGame(params.code);
  if (!game) {
    return {
      description: "Game not found",
      robots: {
        index: false,
        follow: false,
        nocache: true,
        noarchive: true
      }
    };
  }
  return {
    description: `Играть или наблюдать игру с  ${game.host?.name}`,
    openGraph: {
      title: "TON Chess",
      description: `Играть или наблюдать игру с ${game.host?.name}`,
      url: `https://ton-chess/${game.code}`,
      siteName: "TON Chess",
      locale: "en_US",
      type: "website"
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true
    }
  };
}

export default async function Game({ params }: { params: { code: string } }) {
  const game = await fetchActiveGame(params.code);
  if (!game) {
    notFound();
  }

  return <GameAuthWrapper initialLobby={game} />;
}
