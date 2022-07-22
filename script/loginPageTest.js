const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('Login', () => {
    it('should  login with valid credentials', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://juice-shop-od.herokuapp.com/#/');
        await bluestoneFunc.waitElementExists.func(frame, locator['dismissBtn'], 16195, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['dismissBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['accountTab'], 3876, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.click.func(frame, locator['accountTab']);
        await bluestoneFunc.waitElementExists.func(frame, locator['loginBtn'], 30683, vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.click.func(frame, locator['loginBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['loginForm'], '3000', vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.waitElementExists.func(frame, locator['forgotPasswordLink'], '3000', vars.getSnapshot('Bluestone-Snapshot-8'));
        await bluestoneFunc.waitElementExists.func(frame, locator['rememberMe'], '3000', vars.getSnapshot('Bluestone-Snapshot-9'));
        await bluestoneFunc.waitElementExists.func(frame, locator['registerLink'], '3000', vars.getSnapshot('Bluestone-Snapshot-10'));
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 11468, vars.getSnapshot('Bluestone-Snapshot-11'));
        await bluestoneFunc.click.func(frame, locator['emailBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 8913, vars.getSnapshot('Bluestone-Snapshot-13'));
        await bluestoneFunc.change.func(frame, locator['emailBox'], 'birsen@gmail.com');
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 3000, vars.getSnapshot('Bluestone-Snapshot-15'));
        await bluestoneFunc.click.func(frame, locator['passwordBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 5149, vars.getSnapshot('Bluestone-Snapshot-17'));
        await bluestoneFunc.change.func(frame, locator['passwordBox'], '12345');
        await bluestoneFunc.waitElementExists.func(frame, locator['signInBtn'], 3000, vars.getSnapshot('Bluestone-Snapshot-19'));
        await bluestoneFunc.click.func(frame, locator['signInBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['accountTab'], 12744, vars.getSnapshot('Bluestone-Snapshot-21'));
        await bluestoneFunc.click.func(frame, locator['accountTab']);
        await bluestoneFunc.waitElementExists.func(frame, locator['userEmailTab'], 4062, vars.getSnapshot('Bluestone-Snapshot-23'));
        await bluestoneFunc.testTextEqual.func(frame, locator['userEmailTab'], ' birsen@gmail.com');
        await bluestoneFunc.waitElementExists.func(frame, locator['logoutBtn'], 59884, vars.getSnapshot('Bluestone-Snapshot-25'));
        await bluestoneFunc.click.func(frame, locator['logoutBtn']);
    }).timeout(100000);

    it('should get error with invalid username and valid password', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://juice-shop-od.herokuapp.com/#/');
        await bluestoneFunc.waitElementExists.func(frame, locator['dismissBtn'], 7947, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['dismissBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['accountTab'], 3136, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.click.func(frame, locator['accountTab']);
        await bluestoneFunc.waitElementExists.func(frame, locator['loginBtn'], 3283, vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.click.func(frame, locator['loginBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 3000, vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.click.func(frame, locator['emailBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 5253, vars.getSnapshot('Bluestone-Snapshot-9'));
        await bluestoneFunc.change.func(frame, locator['emailBox'], 'BirsenY');
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 3000, vars.getSnapshot('Bluestone-Snapshot-11'));
        await bluestoneFunc.click.func(frame, locator['passwordBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 3528, vars.getSnapshot('Bluestone-Snapshot-13'));
        await bluestoneFunc.change.func(frame, locator['passwordBox'], '12345');
        await bluestoneFunc.waitElementExists.func(frame, locator['signInBtn'], 3000, vars.getSnapshot('Bluestone-Snapshot-15'));
        await bluestoneFunc.click.func(frame, locator['signInBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['errorMessage'], 3000, vars.getSnapshot('Bluestone-Snapshot-17'));
        await bluestoneFunc.testTextEqual.func(frame, locator['errorMessage'], 'Invalid email or password.');
    }).timeout(100000);

    it('should get error with valid username and invalid password', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://juice-shop-od.herokuapp.com/#/');
        await bluestoneFunc.waitElementExists.func(frame, locator['dismissBtn'], 13491, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['dismissBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['accountTab'], 3000, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.click.func(frame, locator['accountTab']);
        await bluestoneFunc.waitElementExists.func(frame, locator['loginBtn'], 3000, vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.click.func(frame, locator['loginBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 3059, vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.click.func(frame, locator['emailBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['emailBox'], 5565, vars.getSnapshot('Bluestone-Snapshot-9'));
        await bluestoneFunc.change.func(frame, locator['emailBox'], 'birsen');
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 3000, vars.getSnapshot('Bluestone-Snapshot-11'));
        await bluestoneFunc.click.func(frame, locator['passwordBox']);
        await bluestoneFunc.waitElementExists.func(frame, locator['passwordBox'], 7623, vars.getSnapshot('Bluestone-Snapshot-13'));
        await bluestoneFunc.change.func(frame, locator['passwordBox'], 'abc12345');
        await bluestoneFunc.waitElementExists.func(frame, locator['signInBtn'], 3000, vars.getSnapshot('Bluestone-Snapshot-15'));
        await bluestoneFunc.click.func(frame, locator['signInBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['errorMessage'], 44127, vars.getSnapshot('Bluestone-Snapshot-17'));
        await bluestoneFunc.testTextEqual.func(frame, locator['errorMessage'], 'Invalid email or password.');
    }).timeout(100000);

    it('should see elements on login page', async function () {
        let element, vars, frame;
        const browser = await puppeteer.launch(config.puppeteer);
        const page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://juice-shop-od.herokuapp.com/#/');
        await bluestoneFunc.waitElementExists.func(frame, locator['dismissBtn'], 70581, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['dismissBtn']);
        await bluestoneFunc.waitElementExists.func(frame, locator['appLogo'], '3000', vars.getSnapshot('Bluestone-Snapshot-3'));
        await projectFunc.getTitle.func(page, 'OWASP Juice Shop');
        await bluestoneFunc.waitElementExists.func(frame, locator['appTitle'], '3000', vars.getSnapshot('Bluestone-Snapshot-5'));
        await bluestoneFunc.waitElementExists.func(frame, locator['accountTab'], '3000', vars.getSnapshot('Bluestone-Snapshot-6'));
        await bluestoneFunc.waitElementExists.func(frame, locator['languageBtn'], '3000', vars.getSnapshot('Bluestone-Snapshot-7'));
        await bluestoneFunc.waitElementExists.func(frame, locator['producsGrid'], '3000', vars.getSnapshot('Bluestone-Snapshot-8'));
        await bluestoneFunc.waitElementExists.func(frame, locator['sideMenu'], '3000', vars.getSnapshot('Bluestone-Snapshot-9'));
    }).timeout(100000);
});