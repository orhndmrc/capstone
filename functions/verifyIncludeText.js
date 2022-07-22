const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector } = require('bluestone/ptLibrary/class/ElementSelector')
const bluestoneFunc = require('bluestone').func
const assert = require('assert')
const axios = require('axios').default
const urlLib = require('url')
/**
 * Validate if current text includes given text or not
 * @param {Frame} frame 
 * @param {ElementSelector} elementSelector
 * @param {string} partialText Partial text
 * @returns 
 */
exports.verifyIncludeText = async function (frame, elementSelector, partialText) {
    let element = await bluestoneFunc.waitElementExists.func(frame, elementSelector, 6000)
    let currentText = await element.evaluate(el => el.value || el.textContent)
    currentText = currentText.trim()
    partialText = partialText.trim()
    let status = currentText.includes(partialText)
    if(status==true){
        return `Current text includes "${partialText}"`

    }
    else{
       return Promise.reject(`"${partialText}" is not part of current text`) 

    }
    
}

