import {Module} from "@nestjs/common";
import {AddStep, Ctx, SceneEnter} from "nestjs-puregram";

@Module({
    providers: [],
    imports: [],
})


export interface StartInterface extends Record<string, any> {
    activateCode: string;
}

export type StartContext = TelegramContextModel & StepContext<StartInterface>;

export class StartModule {

    @SceneEnter()
    async sceneEnter() {
    }

    @AddStep(0)
    async zeroStep(@Ctx() telegramContext: StartContext) {
        if (telegramContext.scene.step.firstTime) {
            return await telegramContext.send(this.config.initialMessage, {
                reply_markup: {
                    resize_keyboard: true,
                    remove_keyboard: true,
                    keyboard: [
                        [{text: this.config.proceedButton}],
                        [{text: this.config.improveLimitsButton}],
                    ],
                },
            });
        }
    }
}
