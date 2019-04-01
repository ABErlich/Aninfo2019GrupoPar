const assert = require('assert');
const puppeteer = require('puppeteer');
const { Before, When, Then } = require('cucumber');

Before({ timeout: 60 * 1000 }, async function testCase() {
    this.browser = await puppeteer.launch();
})

When('I enter the homescreen', async function testCase() {
    this.page = await this.browser.newPage();
    await this.page.goto('https://aninfo2019-grupo-par.herokuapp.com', { waitUntil: 'networkidle2' });
})

Then('I should see the title {string}', async function (string) {
    const title = await this.page.title();

    assert.equal(title, string);

    await this.browser.close();
})

