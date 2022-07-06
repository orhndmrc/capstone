const { Browser, Page, ElementHandle, Frame } = require("puppeteer-core");
const {ElementSelector} = require("bluestone/ptLibrary/class/ElementSelector");
const bluestoneFunc = require("bluestone").func;
const assert = require("assert");
const axios = require("axios").default;
const urlLib = require("url");
const urljoin = require("url-join");
const { url } = require("inspector");
/**
 * Authenticate via API
 * @param {string} username username Ex: "Admin"
 * @param {string} password password Ex: ''
 * @param {string} baseUrl the host name. : Ex: http://172.22.4.39
 * @returns {string}
 */
async function authenticate(username, password, baseUrl) {
  try {
    if (password == "undefined") password = "";
    let url = urljoin(baseUrl, "/Account/v1/GenerateToken");
    let res = await axios.post(url,
      { userName: username, password: password },
      { headers: { "Content-Type": "application/json" } }
    );
    if(res.data['status']=="Failed"){
      return Promise.reject(
        `User not exist. Username:${username} Password:${password} url:${url} Error: ${error} `
      );
    }
    return res.data['token'];
  } catch (error) {
    return Promise.reject(
      `Unable to authenticate via API. Username:${username} Password:${password} url:${url} Error: ${error} `
    );
  }
};
/**
 *login
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @returns {string}
 */
async function loginApi(username, password, baseUrl) {
  try {
    if (password == "undefined") password = "";
    let url = urljoin(baseUrl, "/Account/v1/Login");
    let res = await axios.post(
      url,
      { userName: username, password: password },
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data['userId'];
  } catch (error) {
    return Promise.reject(`Unable to login via API. Error: ${error} `);
  }
};
/**
 * Delete user by id
 * @param {string} username UserName
 * @param {string} password Password
 * @param {string} baseUrl Base Url: Ex: http://172.22.4.39
 * @returns {string}
 */
exports.deleteUserById = async function (username, password, baseUrl)  {
  try {
    let token = await authenticate(username, password, baseUrl)
    let userId = await loginApi(username, password, baseUrl)
    let url = urljoin(baseUrl, "/Account/v1/User/",userId);
    await axios.delete(url,{ headers: { "Authorization": `Bearer ${token}` } });
    return 'User deleted successfuly';
  } catch (error) {
    return `Unable to delete user. Error: ${error} `;
  }
};