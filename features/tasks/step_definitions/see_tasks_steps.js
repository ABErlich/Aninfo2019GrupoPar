const assert = require('assert');
const { Given, When, Then } = require('cucumber');

When('I click {string}', async function (text) {
    await this.page.click('.project-tasks');
})

When('it has one task named {string}', async function (name) {
    await this.page.click('.project-tasks');
    await this.page.click('#add-task');
    await this.page.click('#nav-router-proyectos');
})

Then('I see an empty list of tasks', async function () {
    const itemCount = await this.page.$$eval('.task-list-item', (elements) => elements.length || 0);
    assert.equal(itemCount, 0);
})

Then('I see a list with one task named {string}', async function (name) {
    const items = await this.page.$$eval('.task-list-item',
                                        (elements) => (elements || []).map(e => e.innerText));
    assert.equal(items.length, 1);
    assert.equal(items[0].indexOf(name), 0);
})
