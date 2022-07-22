let locators = require('./bluestone-locator')
let svgSupport = require('./functions/validateSvg')
let validateAttribute = require('./functions/getAttribute')
let scroll = require('./functions/scroll')
let getUrl = require('./functions/getUrl')
let getTitle = require('./functions/getTitle')
let captcha = require('./functions/captcha')
let apis = require('./functions/apiRequest')
let scrollToElement = require('./functions/autoScroll')
let verifyPartialText = require('./functions/verifyIncludeText')
let itemsinCheckOut = require('./functions/checkoutItemList')
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
    getUrl: {
        func: getUrl.getUrl,
        locators: []
    },
    createNewUser: {
        func: apis.registerNewUser,
        locators: []

    },
    getTitle: {
        func: getTitle.getTitle,
        locators: []
    },
    captcha: {
        func: captcha.captcha,
        locators: []
    },
    scrollTobottomPage:{
        func: scrollToElement.scrollToBottomofPage,
        locators: []
    },
    createRandomUser:{
        func: apis.createRandomUser,
        locators: []
    },
    verifyPartialTex:{
        func: verifyPartialText.verifyIncludeText,
        locators: []
    },
    verifyItemsNum:{
        func: itemsinCheckOut.verifyItemsNum,
        locators: []
    }

}
