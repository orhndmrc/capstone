const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
/**
 * Scroll the element to the specific coordinnate
 * @param {Frame} frame 
 * @param {ElementSelector} elementSelector 
 * @param {number} x x-coordinnate you want to scroll to
 * @param {number} y y-coordinnate you want to scroll to
 * @returns 
 */
exports.scroll = async function (frame, elementSelector, x, y) {
    let element = await bluestoneFunc.waitElementExists.func(frame, elementSelector, 6000)
    await element.evaluate((node, x, y) => { node.scroll(x, y) }, x, y)
    return true
}