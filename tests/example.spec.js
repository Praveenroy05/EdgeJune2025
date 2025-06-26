// @ts-check
//const { test, expect } = require('@playwright/test');
import {test, expect} from '@playwright/test'

// page  - fixture - Special type of function which does setup and tear down
test("Valid login test", async function ({page}){
  // launch the browser - will be don by page fixture automatically
  // Launch the url inside the browser

   await page.goto("https://practicetestautomation.com/practice-test-login/")
   // Locator - Identifes the element on the web application - input#username
   await page.locator("input#username").fill("student")
   await page.locator("input#password").fill("Password123")
   await page.locator("button#submit").click()

   // Assert (Verification of test case) whether we are on the home page or not
   await expect(page.locator(".post-title")).toBeVisible()

   // closing the browser
})


// function add(a,b){
//   return 2+2;
// }

// add(12,23)
