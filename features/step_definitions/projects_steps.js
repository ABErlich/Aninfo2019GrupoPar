const assert = require('assert');
const puppeteer = require('puppeteer');
const { Given, When, Then } = require('cucumber');

Given('I am in the projects page', async function () {
    this.page = await this.browser.newPage();
    await this.page.goto('http://localhost:4200/proyectos', {waitUntil: 'networkidle2'});
});


When('I select to create a new project', async function () {
    await this.page.click("#botonito");
});

When(/^I complete code leader and description$/, async function () {
    await this.page.focus('#new-project-id');
    await this.page.keyboard.type('testnewid');

    await this.page.focus('#new-project-leader');
    await this.page.keyboard.type('testnewleader');

    await this.page.focus('#new-project-description');
    await this.page.keyboard.type('testnewdescription');
});

When(/^I not complete code leader and description$/, function () {

});

When('I complete the name', async function () {
    await this.page.focus('#new-project-name');
    await this.page.keyboard.type('testnew');
    await this.page.click("#new-project-submit");
});

Then('I should see the message {string}', async function (string) {
    const element = await this.page.$("#new-project-result");
    const message = await this.page.evaluate(element => element.textContent, element);
    assert.equal(message, string);

    await this.browser.close();
});
