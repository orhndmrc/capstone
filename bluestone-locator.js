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
    }
};