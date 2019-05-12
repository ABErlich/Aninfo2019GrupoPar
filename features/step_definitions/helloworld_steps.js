const assert = require('assert');
const puppeteer = require('puppeteer');
const { Before, When, Then } = require('cucumber');

When('I enter the homescreen', async function testCase() {
    this.page = await this.browser.newPage();
    await this.page.goto('http://localhost:5000', { waitUntil: 'networkidle2' });
})

Then('I should see the title {string}', async function (string) {
    const title = await this.page.title();

    assert.equal(title, string);

    await this.browser.close();
})
