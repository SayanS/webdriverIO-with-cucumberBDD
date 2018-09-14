const {Given, When, Then }=require('cucumber');

var loginPage=require( '../pages/loginPage.js');
var mailInboxPage=require('../pages/mailInboxPage.js');

    Given(/^Home page is opened$/, function () {
        loginPage.open();
    });
    When(/^Enter value "([^"]*)" into Email\/Phone field on Sign in form$/, function (email) {
        loginPage.enterEmail(email);
    });
    When(/^Click on Next button on Sign in form$/, function () {
        loginPage.clickOnNextButtonOfSignInForm();
    });
    When(/^Enter value "([^"]*)" into Password field on Sign in form$/, function (password) {
        loginPage.enterPassword(password);
    });
    Then(/^Email box should be displayed with "([^"]*)" tab$/, function (expectedTabName) {
        mailInboxPage.ensureThatEmailTabIsDispalyed(expectedTabName);

    });
    When(/^Click on Next button on Welcome form$/, function () {
        loginPage.clickOnNextButtonOfWelcomeForm();
    });

