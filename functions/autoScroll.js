const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
/**
 * Scroll to bottom of page
 * @param {Page} page 
 * @returns 
 */
exports.scrollToBottomofPage = async function (page) {
    await page.waitForTimeout(2000)
    await page.evaluate(() => {
        let element = document.querySelector("div.mat-paginator-page-size-label")
        if(element){
            element.scrollIntoView()
        }
    })
    return true
}