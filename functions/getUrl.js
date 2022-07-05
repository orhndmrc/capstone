const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate current url
 * @param {Page} page 
 * @param {string} expectedUrl Expected url
 * @returns 
 */
exports.getUrl = async function (page, expectedUrl) {
    let actualUrl = await page.url()
    let note = `The current value is ${actualUrl}. The expected value is ${expectedUrl}`
    assert.deepEqual(actualUrl, expectedUrl, note)
    return true
}