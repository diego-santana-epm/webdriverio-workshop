import { $ } from "@wdio/globals";
import Screen from "./base.screen";

class CheckoutScreen extends Screen {
  public async fillOutCheckout(data: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    await $(
      'android=new UiSelector().text("CHECKOUT: INFORMATION")'
    ).waitForDisplayed();
    await $("~test-First Name").setValue(data.firstName);
    await $("~test-Last Name").setValue(data.lastName);
    await $("~test-Zip/Postal Code").setValue(data.postalCode);
  }

  public async sendCheckout() {
    await $("~test-CONTINUE").click();
  }
}

export default new CheckoutScreen();
