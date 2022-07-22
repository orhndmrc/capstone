module.exports = {
    'userNameBox': {
        locator: ['#username'],
        screenshot: 'componentPic/userNameBox.png',
        displayName: 'userNameBox'
    },
    'dismissBtn': {
        locator: ['//SPAN[text()=\'Dismiss\']'],
        screenshot: 'componentPic/dismissBtn.png',
        displayName: 'dismissBtn'
    },
    'accountTab': {
        locator: ['//SPAN[text()=\' Account \']'],
        screenshot: 'componentPic/accountTab.png',
        displayName: 'accountTab'
    },
    'languageBtn': {
        locator: ['//BUTTON[@aria-label=\'Language selection menu\']'],
        screenshot: 'componentPic/languageBtn.png',
        displayName: 'languageBtn'
    },
    'searchIcon': {
        locator: ['//MAT-ICON[text()=\' search \']'],
        screenshot: 'componentPic/searchIcon.png',
        displayName: 'searchIcon'
    },
    'appLogo': {
        locator: ['.logo'],
        screenshot: 'componentPic/appLogo.png',
        displayName: 'appLogo'
    },
    'appTitle': {
        locator: ['//SPAN[text()=\' OWASP Juice Shop \']'],
        screenshot: 'componentPic/appTitle.png',
        displayName: 'appTitle'
    },
    'producsGrid': {
        locator: ['//MAT-GRID-LIST[@class=\'mat-grid-list\']'],
        screenshot: 'componentPic/producsGrid.png',
        displayName: 'producsGrid'
    },
    'sideMenu': {
        locator: ['//MAT-ICON[text()=\'menu\']'],
        screenshot: 'componentPic/sideMenu.png',
        displayName: 'sideMenu'
    },
    'loginBtn': {
        locator: ['#navbarLoginButton > span'],
        screenshot: 'componentPic/loginBtn.png',
        displayName: 'loginBtn'
    },
    'loginForm': {
        locator: ['//H1[text()=\'Login\']'],
        screenshot: 'componentPic/loginForm.png',
        displayName: 'loginForm'
    },
    'emailBox': {
        locator: ['//INPUT[@id=\'email\']'],
        screenshot: 'componentPic/emailBox.png',
        displayName: 'emailBox'
    },
    'passwordBox': {
        locator: ['#password'],
        screenshot: 'componentPic/passwordBox.png',
        displayName: 'passwordBox'
    },
    'forgotPasswordLink': {
        locator: ['//A[text()=\'Forgot your password?\']'],
        screenshot: 'componentPic/forgotPasswordLink.png',
        displayName: 'forgotPasswordLink'
    },
    'signInBtn': {
        locator: ['//SPAN[text()=\' Log in \']'],
        screenshot: 'componentPic/signInBtn.png',
        displayName: 'signInBtn'
    },
    'rememberMe': {
        locator: ['//SPAN[@class=\'mat-checkbox-label\']'],
        screenshot: 'componentPic/rememberMe.png',
        displayName: 'rememberMe'
    },
    'registerLink': {
        locator: ['//A[@routerlink=\'/register\']'],
        screenshot: 'componentPic/registerLink.png',
        displayName: 'registerLink'
    },
    'userEmailTab': {
        locator: ['//BUTTON[@id=\'navbarLogoutButton\']/..//BUTTON[@aria-label=\'Go to user profile\']/*[2]'],
        screenshot: 'componentPic/userEmailTab.png',
        displayName: 'userEmailTab'
    },
    'logoutBtn': {
        locator: ['#navbarLogoutButton > span'],
        screenshot: 'componentPic/logoutBtn.png',
        displayName: 'logoutBtn'
    },
    'errorMessage': {
        locator: ['//DIV[text()=\'Invalid email or password.\']'],
        screenshot: 'componentPic/errorMessage.png',
        displayName: 'errorMessage'
    },
    'searchBox': {
        locator: ['//INPUT[@id=\'mat-input-0\']'],
        screenshot: 'componentPic/searchBox.png',
        displayName: 'searchBox'
    },
    'searchResult': {
        locator: ['.item-name'],
        screenshot: 'componentPic/searchResult.png',
        displayName: 'searchResult'
    },
    'mewantItBtn': {
        locator: ['//A[text()=\'Me want it!\']'],
        screenshot: 'componentPic/mewantItBtn.png',
        displayName: 'mewantItBtn'
    },
    'paginatePerPage': {
        locator: ['//DIV[@class=\'mat-paginator-page-size-label\']'],
        screenshot: 'componentPic/paginatePerPage.png',
        displayName: 'paginatePerPage'
    },
    'defaultPaginationValue': {
        locator: ['//DIV[contains(@id, \'mat-select-value\')]'],
        screenshot: 'componentPic/defaultPaginationValue.png',
        displayName: 'defaultPaginationValue'
    },
    'paginatorRangeValue': {
        locator: ['//DIV[@class=\'mat-paginator-range-label\']'],
        screenshot: 'componentPic/paginatorRangeValue.png',
        displayName: 'paginatorRangeValue'
    },
    'nextPageArrow': {
        locator: ['.mat-paginator-navigation-next .mat-paginator-icon'],
        screenshot: 'componentPic/nextPageArrow.png',
        displayName: 'nextPageArrow'
    },
    'previousPageArrow': {
        locator: ['.mat-paginator-navigation-previous .mat-paginator-icon'],
        screenshot: 'componentPic/previousPageArrow.png',
        displayName: 'previousPageArrow'
    },
    'orderPaymentsTab': {
        locator: ['(//*[text()=" Orders & Payment "])[2]'],
        screenshot: 'componentPic/orderPaymentsTab.png',
        displayName: 'orderPaymentsTab'
    },
    'savedAddress': {
        locator: ['//MAT-CELL[text()=\'Residential  Address \']'],
        screenshot: 'componentPic/savedAddress.png',
        displayName: 'savedAddress'
    },
    'addNewAddressBtn': {
        locator: ['//SPAN[text()=\'Add New Address\']'],
        screenshot: 'componentPic/addNewAddressBtn.png',
        displayName: 'addNewAddressBtn'
    },
    'countryBox': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a country.\']'],
        screenshot: 'componentPic/countryBox.png',
        displayName: 'countryBox'
    },
    'nameBox': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a name.\']'],
        screenshot: 'componentPic/nameBox.png',
        displayName: 'nameBox'
    },
    'mobilePhoneNumber': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a mobile number.\']'],
        screenshot: 'componentPic/mobilePhoneNumber.png',
        displayName: 'mobilePhoneNumber'
    },
    'zipCode': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a ZIP code.\']'],
        screenshot: 'componentPic/zipCode.png',
        displayName: 'zipCode'
    },
    'addressInputBox': {
        locator: ['//TEXTAREA[@id=\'address\']'],
        screenshot: 'componentPic/addressInputBox.png',
        displayName: 'addressInputBox'
    },
    'cityInputBox': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a city.\']'],
        screenshot: 'componentPic/cityInputBox.png',
        displayName: 'cityInputBox'
    },
    'stateInputBox': {
        locator: ['//INPUT[@data-placeholder=\'Please provide a state.\']'],
        screenshot: 'componentPic/stateInputBox.png',
        displayName: 'stateInputBox'
    },
    'submitAdressBtn': {
        locator: ['//SPAN[text()=\' Submit \']'],
        screenshot: 'componentPic/submitAdressBtn.png',
        displayName: 'submitAdressBtn'
    },
    'mySavedAddress': {
        locator: ['//SPAN[text()=\' My saved addresses \']'],
        screenshot: 'componentPic/mySavedAddress.png',
        displayName: 'mySavedAddress'
    },
    'myPaymentOptions': {
        locator: ['//SPAN[text()=\' My Payment Options \']'],
        screenshot: 'componentPic/myPaymentOptions.png',
        displayName: 'myPaymentOptions'
    },
    'paymentOptionText': {
        locator: ['//MAT-PANEL-DESCRIPTION[text()=\' Add a credit or debit card \']'],
        screenshot: 'componentPic/paymentOptionText.png',
        displayName: 'paymentOptionText'
    },
    'addNewCard': {
        locator: ['//MAT-PANEL-TITLE[text()=\' Add new card \']'],
        screenshot: 'componentPic/addNewCard.png',
        displayName: 'addNewCard'
    },
    'newCardNameBox': {
        locator: ['(//*[@type="text"])[2]'],
        screenshot: 'componentPic/newCardNameBox.png',
        displayName: 'newCardNameBox'
    },
    'newCardNumberBox': {
        locator: ['//*[@type="number"]'],
        screenshot: 'componentPic/newCardNumberBox.png',
        displayName: 'newCardNumberBox'
    },
    'expiryMonth': {
        locator: ['(//*[contains(@id,"mat-input")])[4]'],
        screenshot: 'componentPic/expiryMonth.png',
        displayName: 'expiryMonth'
    },
    'expiryYear': {
        locator: ['(//*[contains(@id,"mat-input")])[5]'],
        screenshot: 'componentPic/expiryYear.png',
        displayName: 'expiryYear'
    },
    'savedBankAccount': {
        locator: ['//MAT-CELL[text()=\'Chase bank\']'],
        screenshot: 'componentPic/savedBankAccount.png',
        displayName: 'savedBankAccount'
    },
    'languageTab': {
        locator: ['//SPAN[text()=\' EN \']'],
        screenshot: 'componentPic/languageTab.png',
        displayName: 'languageTab'
    },
    'deutschLanguage': {
        locator: ['#mat-radio-6 div'],
        screenshot: 'componentPic/deutschLanguage.png',
        displayName: 'deutschLanguage'
    },
    'productTableTitle': {
        locator: ['//DIV[text()=\'Alle Produkte\']'],
        screenshot: 'componentPic/productTableTitle.png',
        displayName: 'productTableTitle'
    },
    'englishLanguage': {
        locator: ['#mat-radio-8 div'],
        screenshot: 'componentPic/englishLanguage.png',
        displayName: 'englishLanguage'
    },
    'profileUserName': {
        locator: ['//INPUT[@placeholder=\'e.g. SuperUser\']'],
        screenshot: 'componentPic/profileUserName.png',
        displayName: 'profileUserName'
    },
    'setUserNamebtn': {
        locator: ['#submit > .mdl-button__ripple-container'],
        screenshot: 'componentPic/setUserNamebtn.png',
        displayName: 'setUserNamebtn'
    },
    'uploadedPicText': {
        locator: ['#picture'],
        screenshot: 'componentPic/uploadedPicText.png',
        displayName: 'uploadedPicText'
    },
    'uploadedPictureTab': {
        locator: ['form:nth-child(3) .mdl-button__ripple-container'],
        screenshot: 'componentPic/uploadedPictureTab.png',
        displayName: 'uploadedPictureTab'
    },
    'basket': {
        locator: ['//SPAN[text()=\' Your Basket\']'],
        screenshot: 'componentPic/basket.png',
        displayName: 'basket'
    }
};