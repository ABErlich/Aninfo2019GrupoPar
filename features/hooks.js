const puppeteer = require('puppeteer');
var { After } = require('cucumber');

After(function () {
    return this.browser.close();
});
