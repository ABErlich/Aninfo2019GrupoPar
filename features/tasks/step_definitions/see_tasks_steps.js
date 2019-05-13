const assert = require('assert');
const { Given, When, Then } = require('cucumber');

When('I click {string}', async function (text) {
    await this.page.click('.project-tasks');
})

Then('I see an empty list of tasks', async function () {
    const itemCount = await this.page.$$eval('.task-list-item', (elements) => elements.length || 0);
    assert.equal(itemCount, 0);
})
