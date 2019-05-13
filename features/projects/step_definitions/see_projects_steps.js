const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('no projects are created', async function () {
});

Then('I should see an empty list of projects', async function () {
    const itemCount = await this.page.$$eval('.project-list-item', (elements) => elements.length || 0);
    assert.equal(itemCount, 0);
})