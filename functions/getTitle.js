const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate current title
 * @param {Page} page 
 * @param {string} expectedTitle Expected title
 * @returns 
 */
exports.getTitle = async function (page, expectedTitle) {
    let actualTitle = await page.title()
    let note = `The current title is ${actualTitle}. The expected title is ${expectedTitle}`
    assert.deepEqual(actualTitle, expectedTitle, note)
    return true
}