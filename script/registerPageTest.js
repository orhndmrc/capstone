const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('Registration', () => {
    it('should register new user', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://juice-shop-od.herokuapp.com/#/');
        await projectFunc.createRandomUser.func('https://juice-shop-od.herokuapp.com/#/');
    }).timeout(100000);
});