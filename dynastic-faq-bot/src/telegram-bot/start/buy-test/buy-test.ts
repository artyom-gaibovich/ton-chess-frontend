import {AddStep, Ctx, Scene, SceneEnter} from "nestjs-puregram";
import {StartEnum} from "../start.config";
import {TelegramContextModel} from "../../telegram-bot.interface";
import {BuyTestEnum} from "./buy-test.enum";
import {DIConstants} from "../../../constants/DI.constants";
import * as trace_events from "node:trace_events";

@Scene(StartEnum.BuyTest)
export class BuyTestChoose {
    @SceneEnter()
    async sceneEnter() {
    }


    private async initialMsg(telegramContext: TelegramContextModel) {
        return await telegramContext.send(StartEnum.HelloMsg, {
            reply_markup: {
                resize_keyboard: true,
                remove_keyboard: true,
                keyboard: [
                    [{text: BuyTestEnum.FirstMsg}],
                    [{text: BuyTestEnum.Exit}]
                ],
            },
        });
    }

    @AddStep(0)
    async zeroStep(@Ctx() telegramContext: TelegramContextModel) {
        if (telegramContext.scene.step.firstTime) {
            await this.initialMsg(telegramContext)

        }
        if (telegramContext.text === BuyTestEnum.Exit) {
            return await telegramContext.scene.enter(DIConstants.Start);
        }
        if (![String(BuyTestEnum.Exit),
            String(BuyTestEnum.FirstMsg),
        ].includes(telegramContext.text)) {
            await this.initialMsg(telegramContext)
        }
    }
}
