// login_steps.js
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pom/login_page';

const { Given, When, Then, Before } = createBdd();

let loginPage;

// The 'Before' hook is correct because it uses object destructuring: { page }
Before(async ({ page }) => {
  loginPage = new LoginPage(page);
});

// CORRECTED: Use an empty destructured object {}
Given('I navigate to {string}', async ({}, url) => {
  await loginPage.goto(url);
});

// CORRECTED: Use an empty destructured object {}
Given('I enter username {string}', async ({}, username) => {
  await loginPage.enterUsername(username);
});

// CORRECTED: Use an empty destructured object {}
Given('I enter password {string}', async ({}, password) => {
  await loginPage.enterPassword(password);
});

// This step was already correct as it takes no arguments
When('I click on the login button', async () => {
  await loginPage.clickLogin();
});

// This step was already correct as it takes no arguments
Then('I should see the page containing {string}', async () => {
  await loginPage.verifyLoginSuccess();
});

// CORRECTED: Use an empty destructured object {}
Then('I should see the error message {string}', async ({}, expectedMessage) => {
  await loginPage.verifyLoginError(expectedMessage);
});