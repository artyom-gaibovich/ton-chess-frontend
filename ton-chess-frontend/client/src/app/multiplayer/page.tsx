"use client";
import {useRouter} from "next/navigation";
import PublicGames from "@/components/home/PublicGames/PublicGames";
import CreateGame from "@/components/home/CreateGame";
import JoinGame from "@/components/home/JoinGame";

export default function MultiplayerPage() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8 px-4 py-10 lg:gap-16 ">
      <PublicGames/>

      <div className="flex flex-col items-center gap-4">


        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold leading-tight">Создать игру</h2>
          <CreateGame/>
        </div>
        <div className="divider divider-vertical">или</div>

        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold leading-tight">Пригласить по ссылке</h2>
          <JoinGame/>
        </div>
      </div>
    </div>

  );
}
