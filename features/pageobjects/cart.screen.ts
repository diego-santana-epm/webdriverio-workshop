import { $ } from "@wdio/globals";
import Screen from "./base.screen";

class CartScreen extends Screen {
  public async getProductsInCart(): Promise<Map<string, string>> {
    await $('//android.widget.TextView[@text="YOUR CART"]').waitForDisplayed();
    const items = await $$(
      '(//android.view.ViewGroup[@content-desc="test-Item"])'
    ).length;

    let products: Map<string, string> = new Map<string, string>();

    for (let i = 1; i <= items; i++) {
      const productName = await $(
        `(//android.view.ViewGroup[@content-desc="test-Item"])[${i}]//android.view.ViewGroup[@content-desc="test-Description"]//android.widget.TextView[1]`
      ).getText();
      const price = await $(
        `(//android.view.ViewGroup[@content-desc="test-Item"])[${i}]//android.view.ViewGroup[@content-desc="test-Price"]//android.widget.TextView`
      ).getText();
      products.set(productName, price);
    }
    return products;
  }
}

export default new CartScreen();
