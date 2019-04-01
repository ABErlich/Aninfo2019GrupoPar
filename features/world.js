const puppeteer = require('puppeteer');
const { setWorldConstructor } = require('cucumber')

function CustomWorld() {
    this.browser = puppeteer.launch();
}

setWorldConstructor(CustomWorld)

