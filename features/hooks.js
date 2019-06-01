const puppeteer = require('puppeteer');
var { Before, After } = require('cucumber');

Before({ timeout: 60 * 1000 }, async function testCase() {
    this.browser = await puppeteer.launch();
})

After(function () {
    return this.browser.close();
});
