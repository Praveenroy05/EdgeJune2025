import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('#submit');
    this.successMessage = page.locator('h1');
    this.errorMessage = page.locator('#error');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toHaveText('Logged In Successfully');
  }

  async verifyLoginError(expectedMessage) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }
}
