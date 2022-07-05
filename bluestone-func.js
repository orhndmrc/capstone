let locators = require('./bluestone-locator')
let svgSupport = require('./functions/validateSvg')
let validateAttribute = require('./functions/getAttribute')
let scroll = require('./functions/scroll')
let api = require('./functions/apiRequest')
let getUrl = require('./functions/getUrl')
let getTitle = require('./functions/getTitle')
let captcha = require('./functions/captcha')
module.exports = {
    validateSvgFromLink: {
        func: svgSupport.validateSvgFromLink,
        locators: []
    },
    validateAttribute: {
        func: validateAttribute.validateAttribute,
        locators: []
    },
    scroll: {
        func: scroll.scroll,
        locators: []
    },
    getUrl:{
        func: getUrl.getUrl,
        locators: []
    },
    getTitle:{
        func: getTitle.getTitle,
        locators: []
    },
    captcha:{
        func: captcha.captcha,
        locators: []
    },
    deleteUserById:{
        func: api.deleteUserById,
        locators: []
    }

}