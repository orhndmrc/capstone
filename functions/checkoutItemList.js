const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate item list in checkout 
 * @param {Frame} frame 
 * @param {ElementSelector} elementSelector
 * @param {number}  numberOfItems # of item in checkout
 * @returns 
 */
exports.verifyItemsNum = async function (frame, elementSelector, numberOfItems) {
    let itemsinCheckout = (await frame.$$(elementSelector)).length - 1
    assert.strictEqual(itemsinCheckout, numberOfItems, `Current value is ${itemsinCheckout}. It's different from baseline ${numberOfItems}`)
    return `Current value "${itemsinCheckout}" match baseline`
    
}

