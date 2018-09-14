Feature: Check Sign functionality

  Scenario: Check ability to sign in with valid credentials
    Given Home page is opened
    When Enter value "qazaelab@gmail.com" into Email/Phone field on Sign in form
    When Click on Next button on Sign in form
    When Enter value "noanypassword" into Password field on Sign in form
    When Click on Next button on Welcome form
    Then Email box should be displayed with "Primary" tab


