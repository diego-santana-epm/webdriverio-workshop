import { $ } from "@wdio/globals";
import Screen from "./base.screen";

class CompleteScreen extends Screen {
  public async isCompletedVisible() {
    await $(
      '//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]'
    ).isDisplayed();
  }
}

export default new CompleteScreen();
