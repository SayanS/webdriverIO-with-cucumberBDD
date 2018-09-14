var Page = require('./page');

var LoginPage = Object.create(Page, {
    username: {
        get: function () {
            return browser.element('#username');
        }
    },

    emailInput: {
        get: function () {
            return browser.element('#identifierId');
        }
    },

    nextButtonSignInForm: {
        get: function () {
            return browser.element('#identifierNext');
        }
    },

    passwordInput: {
        get: function () {
            return browser.element('input[name="password"]');
        }
    },

    nextButtonWelcomeForm: {
        get: function () {
            return browser.element('#passwordNext');
        }
    },

    /**
     * define or overwrite page methods
     */

    open: {
        value: function () {
            Page.open('/')       //this will append `login` to the baseUrl to form complete URL
            browser.pause(1000);
        }
    },

    /**
     * your page specific methods
     */

    enterEmail: {
        value: function (email) {
            this.emailInput.setValue(email);
        }
    },

    clickOnNextButtonOfSignInForm: {
        value: function () {
         this.nextButtonSignInForm.click();
        }
    },

    enterPassword: {
        value: function (password) {
            this.passwordInput.waitForVisible(5000);
            this.passwordInput.setValue(password);
        }
    },

    clickOnNextButtonOfWelcomeForm: {
        value: function () {
            this.nextButtonWelcomeForm.click();
        }
    }

});

module.exports = LoginPage;

