"use client";
import {useRouter} from "next/navigation";
import PublicGames from "@/components/home/PublicGames/PublicGames";
import CreateGame from "@/components/home/CreateGame";
import JoinGame from "@/components/home/JoinGame";

export default function FAQ() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8 px-4 py-10 lg:gap-16 ">

      <div className="flex flex-col items-center gap-4">


        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold leading-tight">Ответы на часто задаваемые вопросы</h2>
          <ul>
            <li>
              <h3>1. Как начать онлайн игру?</h3>
              <p>Чтобы начать онлайн игру, выберите опцию "Онлайн игра", затем выберите комнату и укажите ставку. После
                успешного проведения транзакции игра начнется.</p>
              <br/>
            </li>

            <li>
              <h3>2. Что произойдет, если игрок отключится?</h3>
              <p>Если один из игроков отключится и не вернется в игру в течение 60 секунд, он автоматически проиграет, а
                его соперник получит выигрыш.</p>
              <br/>

            </li>
            <li>
              <h3>3. Как обрабатываются ставки и выигрыши?</h3>
              <p>Ставки обрабатываются с использованием криптовалюты TON. После завершения игры победитель получает
                выигрыш, за вычетом комиссии, которую берет игра.</p>
              <br/>

            </li>
            <li>
              <h3>4. Какая комиссия берется с выигрыша?</h3>
              <p>Игра взимает небольшую комиссию с выигрыша победителя. Размер комиссии указан в условиях игры.</p>
              <br/>
            </li>
            <li>
              <h3>5. Есть ли возможность играть без ставок?</h3>
              <p>Да, вы можете выбрать режим игры с искусственным интеллектом (ИИ). В этом режиме вы не рискуете
                потерять деньги, и ставки не требуются.</p>
              <br/>
            </li>
            <li>
              <h3>6. Могу ли я играть с друзьями?</h3>
              <p>Да, вы можете играть с друзьями, вы можете им отправить пригласительную ссылку.</p>
              <br/>
            </li>
          </ul>
          <p>

          </p>
        </div>
        <div className="divider divider-vertical">or</div>

      </div>
    </div>

);
}
