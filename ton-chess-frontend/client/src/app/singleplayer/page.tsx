"use client";
import {useRouter} from "next/navigation";

export default function SinglePlayer() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8 px-4 py-10 lg:gap-16 ">

      <div className="flex flex-col items-center gap-4">


        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold leading-tight">Игра с икуственным интеллектом</h2>
          <p>
            На данный момент игра с икуственным интеллектом ещё не реализована, но мы это добавим в следующих
            обновлениях 🥸
          </p>
          <div className="divider divider-vertical"></div>
          <p>
            А пока что можете подписаться на наш тг канал :0)
          </p>
          <p>
            https://t.me/ton-chess
          </p>
        </div>

      </div>
    </div>

  );
}
