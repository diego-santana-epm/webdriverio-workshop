import { $ } from "@wdio/globals";
import Screen from "./base.screen.ts";

class LoginScreen extends Screen {
  public get inputUsername() {
    return $("~test-Username");
  }

  public get inputPassword() {
    return $("~test-Password");
  }

  public get btnLogin() {
    return $("~test-LOGIN");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginScreen();
