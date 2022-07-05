const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate attribute
 * @param {Frame} frame 
 * @param {ElementSelector} elementSelector 
 * @param {string} attributeName Attribute Name
 * @param {string} attributeValue The expected attribute value
 * @returns 
 */
exports.validateAttribute = async function (frame, elementSelector, attributeName, attributeValue) {

    let element = await bluestoneFunc.waitElementExists.func(frame, elementSelector, 6000)
    let currentValue = await element.evaluate((node, attributeName) => node.getAttribute(attributeName), attributeName)
    let note = `The current value is ${currentValue}. The expected value is ${attributeValue}`
    assert.deepEqual(currentValue, attributeValue, note)
    return true
}