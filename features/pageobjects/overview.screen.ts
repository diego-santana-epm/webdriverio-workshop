import { $ } from "@wdio/globals";
import Screen from "./base.screen";

class OverviewScreen extends Screen {
  public async finishCheckout() {
    const finishButton = $("~test-FINISH");
    await finishButton.scrollIntoView();
    await finishButton.click();
  }
}

export default new OverviewScreen();
