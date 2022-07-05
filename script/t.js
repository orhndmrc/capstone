const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('t', () => {
    it('t', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://demoqa.com/login');
        await bluestoneFunc.waitElementExists.func(frame, locator['newUserBtn'], 8661, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['newUserBtn']);
        await projectFunc.captcha.func(page, 'recaptcha/api2/anchor');
    });
});