const { Browser, Page, ElementHandle, Frame } = require("puppeteer-core");
const {ElementSelector,} = require("bluestone/ptLibrary/class/ElementSelector");
const bluestoneFunc = require("bluestone").func;
const assert = require("assert");
const axios = require("axios").default;
const urlLib = require("url");
/**
 * Handle captcha for new registration
 * @param {Page} page
 * @param {string} partialIframeUrl partial iframe url
 * @returns
 */
exports.captcha = async function (page, partialIframeUrl) {
  let iframes = await page.frames();
  const iframe = iframes.find((x) => x["_url"].includes(partialIframeUrl) == true)
  if (!iframe) {
    return "iFrame not found with the specified url"
  }
  console.log("Frame found")
  const captchaBox = await iframe.$(".recaptcha-checkbox")
  await captchaBox.click()
  return "Captcha handled in iframe"
}
