import {AddStep, Ctx, Scene, SceneEnter} from "nestjs-puregram";
import {StartEnum} from "../start.config";
import {TelegramContextModel} from "../../telegram-bot.interface";
import {HowToBuyTestEnum} from "./how-to-buy-test.enum";
import {DIConstants} from "../../../constants/DI.constants";
import * as trace_events from "node:trace_events";

@Scene(StartEnum.HowToPassTest)
export class HowToBuyTest {
    @SceneEnter()
    async sceneEnter() {
    }


    private async initialMsg(telegramContext: TelegramContextModel) {
        return await telegramContext.send(StartEnum.HelloMsg, {
            reply_markup: {
                resize_keyboard: true,
                remove_keyboard: true,
                keyboard: [
                    [{text: HowToBuyTestEnum.FirstMsg}],
                    [{text: HowToBuyTestEnum.Exit}]
                ],
            },
        });
    }

    @AddStep(0)
    async zeroStep(@Ctx() telegramContext: TelegramContextModel) {
        if (telegramContext.scene.step.firstTime) {
            await this.initialMsg(telegramContext)

        }
        if (telegramContext.text === HowToBuyTestEnum.Exit) {
            return await telegramContext.scene.enter(DIConstants.Start);
        }
        if (![String(HowToBuyTestEnum.Exit), String(HowToBuyTestEnum.FirstMsg)].includes(telegramContext.text)) {
            await this.initialMsg(telegramContext)
        }
    }
}
