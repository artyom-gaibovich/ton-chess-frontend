import PlayerStats from "@/components/PlayerStats/PlayerStats";
import GameModes from "@/components/GameModes/GameModes";
import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";

export const revalidate = 0;

export default function Home() {
  return (

    <div className="flex w-full flex-wrap items-center justify-center gap-8 px-4 py-10 lg:gap-16 ">
      <PlayerStats/>
      <GameModes>

      </GameModes>
      <ConnectWalletButton></ConnectWalletButton>
    </div>
  )
    ;
}
