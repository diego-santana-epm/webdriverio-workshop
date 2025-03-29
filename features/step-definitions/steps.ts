import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginScreen from "../pageobjects/login.screen.ts";
import ProductsScreen from "../pageobjects/products.screen.ts";
import CartScreen from "../pageobjects/cart.screen.ts";

import { Product } from "../types/products.ts";

const screens = {
  login: LoginScreen,
  products: ProductsScreen,
  cart: CartScreen,
};

Given(/^I am on the login page$/, async () => {
  await expect(screens.login.inputUsername).toBeDisplayed();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await screens.login.login(username, password);
});

Then(/^I can see the products label$/, async () => {
  screens.products.productsLabel.waitForDisplayed();
  await expect(screens.products.productsLabel).toBeDisplayed();
});

When(/^I choose a product in the catalog$/, async function () {
  this.product = await screens.products.selectProductItem();
});

When(/^I go to cart$/, async () => {
  await screens.products.goToCart();
});

Then(/^I can see the product is on the cart$/, async function () {
  const products: Map<string, string> = await screens.cart.getProductsInCart();
  console.log(products);
  console.log(this.product);
  await expect(products.get(this.product["productName"])).toEqual(
    this.product["price"]
  );
});
