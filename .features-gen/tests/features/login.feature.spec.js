// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Successful login with valid credentials', async ({ Given, And, When, Then }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await And('I enter username "student"'); 
    await And('I enter password "Password123"'); 
    await When('I click on the login button'); 
    await Then('I should see the page containing "Logged In Successfully"'); 
  });

  test.describe('Failed login with invalid credentials', () => {

    test('Example #1', async ({ Given, And, When, Then }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "wronguser"'); 
      await And('I enter password "Password123"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your username is invalid!"'); 
    });

    test('Example #2', async ({ Given, And, When, Then }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "student"'); 
      await And('I enter password "wrongpass"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your password is invalid!"'); 
    });

    test('Example #3', async ({ Given, And, When, Then }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "wronguser123"'); 
      await And('I enter password "wrongpass456"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your username is invalid!"'); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the page containing \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Logged In Successfully\"","children":[{"start":34,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter username \"wronguser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wronguser\"","children":[{"start":18,"value":"wronguser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I enter password \"wrongpass\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongpass\"","children":[{"start":18,"value":"wrongpass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your password is invalid!\"","children":[{"start":32,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter username \"wronguser123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wronguser123\"","children":[{"start":18,"value":"wronguser123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I enter password \"wrongpass456\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongpass456\"","children":[{"start":18,"value":"wrongpass456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end