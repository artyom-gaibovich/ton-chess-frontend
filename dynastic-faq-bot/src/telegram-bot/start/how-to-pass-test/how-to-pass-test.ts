import {AddStep, Ctx, Scene, SceneEnter} from "nestjs-puregram";
import {StartEnum} from "../start.config";
import {TelegramContextModel} from "../../telegram-bot.interface";
import {AnotherQuestionEnum} from "./another-question.enum";
import {DIConstants} from "../../../constants/DI.constants";

@Scene(StartEnum.AnotherQuestion)
export class HowToPassTest {
    @SceneEnter()
    async sceneEnter() {
    }

    @AddStep(0)
    async zeroStep(@Ctx() telegramContext: TelegramContextModel) {
        if (telegramContext.scene.step.firstTime) {
            return await telegramContext.send(StartEnum.HelloMsg, {
                reply_markup: {
                    resize_keyboard: true,
                    remove_keyboard: true,
                    keyboard: [
                        [{text: AnotherQuestionEnum.FirstMsg}, {text: AnotherQuestionEnum.SecondMsg}, {text: AnotherQuestionEnum.ThirdMsg}],
                        [{text: AnotherQuestionEnum.Exit}]
                    ],
                },
            });
        }
        if (telegramContext.text === AnotherQuestionEnum.Exit) {
            return await telegramContext.scene.enter(DIConstants.Start);
        }
    }
}
