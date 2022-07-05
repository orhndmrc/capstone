let path = require('path')
module.exports = {
    puppeteer: {
        headless: false,
        defaultViewport: null,
        ignoreHTTPSErrors: true,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--window-size=1920,1040',
        ],
        ignoreDefaultArgs: ['--disable-extensions']
    },
    runtime: {
        bluestoneServer: process.env.BLUESTONE_HOST || ''
    }

}