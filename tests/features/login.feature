Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter username "student"
    And I enter password "Password123"
    When I click on the login button
    Then I should see the page containing "Logged In Successfully"

  Scenario Outline: Failed login with invalid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter username "<username>"
    And I enter password "<password>"
    When I click on the login button
    Then I should see the error message "<error>"

    Examples:
      | username     | password     | error                                       |
      | wronguser    | Password123  | Your username is invalid!                   |
      | student      | wrongpass    | Your password is invalid!                   |
      | wronguser123 | wrongpass456 | Your username is invalid!                   |
