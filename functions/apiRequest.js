const { Browser, Page, ElementHandle, Frame } = require("puppeteer-core");
const { ElementSelector } = require("bluestone/ptLibrary/class/ElementSelector");
const bluestoneFunc = require("bluestone").func;
const assert = require("assert");
const axios = require("axios").default;
const urlLib = require("url");
const urljoin = require("url-join");
const { url } = require("inspector");

 const authenticate = async function (email, password, baseUrl) {
  try {
    let url = urljoin(baseUrl, "/rest/user/login")
    let res = await axios.post(
      url,
      { email: email, password: password },
      { headers: { "Content-Type": "application/json" } }
    )
    return res.data['authentication']['token'];
  } catch (error) {
    return Promise.reject(`Unable to authenticate via API. Error: ${error} `)
  }
}

/**
 * Login to authenticate
 * @param {string} email Email
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @returns {string}
 */
exports.loginApi= async function (email, password, baseUrl) {
  return await authenticate(email, password, baseUrl)

}

async function _registerNewUser(email, password, baseUrl) {
  try {
    let url = urljoin(baseUrl, "/api/Users")
    await axios.post(url, 
      { email: email, password: password})
    return `New user created under -${email}- name successfuly`;
  } catch (error) {
    return `Unable to create user. Error: ${error} `
  }

}

/**
 * Create new user
 * @param {string} email Email
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @returns {string}
 */
exports.registerNewUser= async function (email, password, baseUrl) {
  return await _registerNewUser(email, password, baseUrl)
}

async function _createRandomUser(baseUrl) {
  let email = `user${Math.floor(Math.random() * 100)}@gmail.com`
  let password= `pass${Math.floor(Math.random() * 100)}`
  try {
    let url = urljoin(baseUrl, "/api/Users")
    await axios.post(url, 
      { email: email, password: password})
    return `New user created successfuly with email: ${email} `;
  } catch (error) {
    return `Unable to create user. Error: ${error} `
  }

}

/**
 * Random user creation with gmail
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @returns {string}
 */
exports.createRandomUser= async function (baseUrl) {
  return await _createRandomUser(baseUrl)
}