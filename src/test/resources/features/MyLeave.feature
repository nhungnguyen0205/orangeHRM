@leave
Feature: My Leave
  Scenario: Verify that My Leave page will be displayed when ESS user click on My Leave on menu
    Given I open "https://opensource-demo.orangehrmlive.com/index.php/auth/login" page
    When I type username "fiona"
    And I type pass "12345678"
    And I click on "LOGIN" button
    Then I wait some seconds
    When I focus mouse on "Leave"
    And I click on "My Leave" on SubMenu
    Then "My Leave List" page will be displayed
