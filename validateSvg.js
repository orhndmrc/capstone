const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('../node_modules/bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate Svg Link and check if svg match what we expect
 * @param {Frame} frame 
 * @param {ElementSelector} elementSelector 
 * @param {string} expectedSvg expected svg string
 */
exports.validateSvgFromLink = async function (frame, elementSelector, expectedSvg) {
    let element = await bluestoneFunc.waitElementExists.func(frame, elementSelector, 6000)
    let svgUrl = await element.evaluate(node => node.getAttribute('src'))
    let currentUrl = frame.url()
    let urlObj = new URL(currentUrl)
    let svgFullUrl = urlObj.protocol + '//' + urlObj.hostname + urlObj.pathname + '/../' + svgUrl
    let svgData = await axios.get(svgFullUrl)
    let sanitizedCurrentValue = svgData.data.toString().replace(/\t/g, '').replace(/\n/g, '')
    assert.deepEqual(sanitizedCurrentValue, expectedSvg, 'current svg does not match desired value')
    return true
}