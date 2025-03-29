import { $ } from "@wdio/globals";
import Screen from "./base.screen";

class ProductsScreen extends Screen {
  public get productsLabel() {
    return $('android=new UiSelector().text("PRODUCTS")');
  }

  public async selectProductItem(itemIndex?: number) {
    const items = $$(`(//android.view.ViewGroup[@content-desc="test-Item"])`);
    let selectedItem = items[0];
    if (itemIndex) {
      selectedItem = items[itemIndex];
    }
    const price = await selectedItem
      .$('//android.widget.TextView[@content-desc="test-Price"]')
      .getText();
    const productName = await selectedItem
      .$('//android.widget.TextView[@content-desc="test-Item title"]')
      .getText();
    await selectedItem
      .$('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]')
      .click();
    return { productName, price };
  }

  public async goToCart() {
    await $("~test-Cart").click();
  }
}

export default new ProductsScreen();
