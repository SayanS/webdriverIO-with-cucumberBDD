var Page = require('./page');
var expect=require('expect.js');

var MailInboxPage = Object.create(Page, {

    emailBoxTabHeader: {
        get: function () {
            return browser.element('tr[role=tablist]');
        }
    },

    tabsTitlesOfEmailBox: {
        get: function () {
            return browser.elements('td[role="heading"] div.aKz');
        }
    },

    /**
     * define or overwrite page methods
     */

    ensureThatEmailTabIsDispalyed: {
        value: function (tabName) {
            this.emailBoxTabHeader.waitForVisible(9000);
            var tabTitles = [];
            browser.$$('td[role="heading"] div.aKz').forEach(function (title) {
                tabTitles.push(title.getText());
                console.log("\n" + title.getText());
            });
            console.log(tabTitles);
            expect(tabTitles).contain('ХУЙ');
        }
    }
});

module.exports = MailInboxPage;
// Changes in gitHub

