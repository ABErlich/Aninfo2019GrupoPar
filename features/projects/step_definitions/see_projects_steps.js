const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('no projects are created', async function () {
});

Given('there is a project created with name {string}', async function (name) {
    await this.page.click("#botonito");

    await this.page.focus('#new-project-id');
    await this.page.keyboard.type('testnewid');

    await this.page.focus('#new-project-leader');
    await this.page.keyboard.type('testnewleader');

    await this.page.focus('#new-project-description');
    await this.page.keyboard.type('testnewdescription');

    await this.page.focus('#new-project-name');
    await this.page.keyboard.type(name);

    await this.page.click("#new-project-submit");

    await this.page.click('#nav-router-proyectos');
});

Then('I should see an empty list of projects', async function () {
    const itemCount = await this.page.$$eval('.project-list-item', (elements) => elements.length || 0);
    assert.equal(itemCount, 0);
})

Then('I should see a list with one project named {string}', async function (name) {
    const items = await this.page.$$eval('.project-list-item .project-title',
                                        (elements) => (elements || []).map(e => e.innerText));
    assert.equal(items.length, 1);
    assert.equal(items[0], name);
})

