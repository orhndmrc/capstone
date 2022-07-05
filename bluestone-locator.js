module.exports = {
    'Todo Input': {
        locator: ['.new-todo'],
        screenshot: 'componentPic/Todo_Input.png',
        displayName: 'Todo Input'
    },
    'lohinHeader': {
        locator: ['//H5[text()=\'Login in Book Store\']'],
        screenshot: 'componentPic/lohinHeader.png',
        displayName: 'lohinHeader'
    },
    'userNameBox': {
        locator: ['#userName'],
        screenshot: 'componentPic/userNameBox.png',
        displayName: 'userNameBox'
    },
    'passwordBox': {
        locator: ['//INPUT[@placeholder=\'Password\']'],
        screenshot: 'componentPic/passwordBox.png',
        displayName: 'passwordBox'
    },
    'loginBtn': {
        locator: ['//BUTTON[text()=\'Login\']'],
        screenshot: 'componentPic/loginBtn.png',
        displayName: 'loginBtn'
    },
    'logoutBtn': {
        locator: ['//BUTTON[@id=\'submit\' and text()=\'Log out\']'],
        screenshot: 'componentPic/logoutBtn.png',
        displayName: 'logoutBtn'
    },
    'errorMessage': {
        locator: ['//P[text()=\'Invalid username or password!\']'],
        screenshot: 'componentPic/errorMessage.png',
        displayName: 'errorMessage'
    },
    'newUserBtn': {
        locator: ['//BUTTON[text()=\'New User\']'],
        screenshot: 'componentPic/newUserBtn.png',
        displayName: 'newUserBtn'
    },
    'newUserNameBx': {
        locator: ['#firstname'],
        screenshot: 'componentPic/newUserNameBx.png',
        displayName: 'newUserNameBx',
        snapshot: require('./locator/newUserNameBx.json')
    },
    'newUserPasswordBx': {
        locator: ['#lastname'],
        screenshot: 'componentPic/newUserPasswordBx.png',
        displayName: 'newUserPasswordBx',
        snapshot: require('./locator/newUserPasswordBx.json')
    },
    'captcha': {
        locator: ['//IFRAME[@title=\'reCAPTCHA\']'],
        screenshot: 'componentPic/captcha.png',
        displayName: 'captcha',
        snapshot: require('./locator/captcha.json')
    },
    'registerBtn': {
        locator: ['//BUTTON[text()=\'Register\']'],
        screenshot: 'componentPic/registerBtn.png',
        displayName: 'registerBtn',
        snapshot: require('./locator/registerBtn.json')
    }
};