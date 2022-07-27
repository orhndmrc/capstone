const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
describe('Example Test', () => {
    it('Add todo item and delete123', async () => {
       
        let element, variable, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        let vars = { currentFileName: __filename };
        frame = page;
        let todoSelector = '.new-todo'
        let labelSelector = "//LABEL[text()='hello world']"
        let destroyButton = '.destroy'
        await page.goto('https://todomvc.com/examples/angularjs/#/')
        await page.waitForSelector(todoSelector)
        await page.click(todoSelector)
        let todoSelectorElement = await page.$(todoSelector)
        await todoSelectorElement.type('hello world')
        await page.keyboard.press('Enter')
        await page.waitForXPath(labelSelector, { timeout: 5000 })
        let elements = await page.$x(labelSelector)
        await elements[0].hover()
        await page.click(destroyButton)

    }).timeout(9999999);
});
