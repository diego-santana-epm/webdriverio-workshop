import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginScreen from "../pageobjects/login.screen.ts";
import ProductsScreen from "../pageobjects/products.screen.ts";
import CartScreen from "../pageobjects/cart.screen.ts";
import CheckoutScreen from "../pageobjects/checkout.screen.ts";
import OverviewScreen from "../pageobjects/overview.screen.ts";
import CompleteScreen from "../pageobjects/complete.screen.ts";

const screens = {
  login: LoginScreen,
  products: ProductsScreen,
  cart: CartScreen,
  checkout: CheckoutScreen,
  overviewScreen: OverviewScreen,
  completeScreen: CompleteScreen,
};

Given(/^I am on the login page$/, async () => {
  await expect(screens.login.inputUsername).toBeDisplayed();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await screens.login.login(username, password);
});

Then(/^I can see the products label$/, async () => {
  await screens.products.productsLabel.waitForDisplayed();
  await expect(screens.products.productsLabel).toBeDisplayed();
});

When(/^I choose a product in the catalog$/, async function () {
  this.product = await screens.products.selectProductItem();
});

When(/^I go to cart$/, async () => {
  await screens.products.goToCart();
});

When(/^I can see the product is on the cart$/, async function () {
  const products: Map<string, string> = await screens.cart.getProductsInCart();
  console.log(products);
  console.log(this.product);
  await expect(products.get(this.product["productName"])).toEqual(
    this.product["price"]
  );
});

When(
  /^I proceed with checkout using (\w+),(\w+),(\w+)$/,
  async (firstName, lastName, postalCode) => {
    await screens.cart.checkoutCart();
    await screens.checkout.fillOutCheckout({ firstName, lastName, postalCode });
    await screens.checkout.sendCheckout();
  }
);

When(/^I finish the checkout$/, async () => {
  await screens.overviewScreen.finishCheckout();
});

Then(/^The checkout is completed$/, async () => {
  await expect(screens.completeScreen.isCompletedVisible()).toBeTruthy();
});
