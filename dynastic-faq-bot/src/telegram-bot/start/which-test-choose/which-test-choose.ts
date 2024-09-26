import {AddStep, Ctx, Scene, SceneEnter} from "nestjs-puregram";
import {StartEnum} from "../start.config";
import {TelegramContextModel} from "../../telegram-bot.interface";
import {HowToPassTestEnum} from "./how-to-pass-test.enum";
import {DIConstants} from "../../../constants/DI.constants";
import * as trace_events from "node:trace_events";

@Scene(StartEnum.HowToPassTest)
export class HowToPassTest {
    @SceneEnter()
    async sceneEnter() {
    }


    private async initialMsg(telegramContext: TelegramContextModel) {
        return await telegramContext.send(StartEnum.HelloMsg, {
            reply_markup: {
                resize_keyboard: true,
                remove_keyboard: true,
                keyboard: [
                    [{text: HowToPassTestEnum.FirstMsg}],
                    [{text: HowToPassTestEnum.Exit}]
                ],
            },
        });
    }

    @AddStep(0)
    async zeroStep(@Ctx() telegramContext: TelegramContextModel) {
        if (telegramContext.scene.step.firstTime) {
            await this.initialMsg(telegramContext)

        }
        if (telegramContext.text === HowToPassTestEnum.Exit) {
            return await telegramContext.scene.enter(DIConstants.Start);
        }
        if (![String(HowToPassTestEnum.Exit), String(HowToPassTestEnum.FirstMsg)].includes(telegramContext.text)) {
            await this.initialMsg(telegramContext)
        }
    }
}
