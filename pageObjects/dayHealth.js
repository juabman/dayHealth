var customCommands = {
    signUp: function (name, username, email, password) {
        this
            //signup test
            .waitForElementPresent('@signUp')
            .click('@signUp')
            .setValue('@signUpName', name)
            .setValue('@signUpUsername', username)
            .setValue('@signUpEmail', email)
            .setValue('@signUpPassword', password)
            .click('@signUpButton')
            .waitForElementPresent('@wizardCheckbox')
            .click('@cancel')
            .verify.containsText('@header', name, 'Sign Up Successful')
            .click('@logout')
        this
            //login test
            .waitForElementPresent('@username')
            .setValue('@username', username)
            .setValue('@password', password)
            .click('@loginButton')
            .waitForElementPresent('@cancel')
            .click('@cancel')
            .waitForElementPresent('@header')
            .verify.containsText('@header', name, 'Login Successful')
            .click('@logout')
        this
            //unique signup
            .waitForElementPresent('@signUp')
            .click('@signUp')
            .setValue('@signUpName', name)
            .setValue('@signUpUsername', username)
            .setValue('@signUpEmail', email)
            .setValue('@signUpPassword', password)
            .click('@signUpButton')
            .api.pause(1000)
        this
            .api.getAlertText((result)=>{
                this.verify.ok(result.value === "There was a problem signing you up. please try again", "Checking for an error message on sign up.")
            })
            .acceptAlert()
        this
        return this
    },
    compose: function (username, password, text1, text2) {
        this
            .waitForElementPresent('@username')
            .setValue('@username', username)
            .setValue('@password', password)
            .click('@loginButton')
            .waitForElementPresent('@cancel')
            .click('@cancel')
            .waitForElementPresent('@header')
            .click('@compose')
            .setValue('@composeTitle', text1)
            .setValue('@composeText', text2)
            .click('@submitButton')
            .waitForElementPresent('@previousEntries')
            .verify.containsText('@entry', text1, 'Entry Successful')
        return this
    },
}

module.exports = {
    url: 'https://www.dayhealth.space/#/',
    commands: [customCommands],
    elements: {
        username: 'input[placeholder="Username"]',
        password: 'input[placeholder="Password"]',
        loginButton: 'button[type="button"]',
        signUp: { selector: '//*[contains(text(),"Not a user?")]', locateStrategy: 'xpath' },
        header: { selector: '//header/h2', locateStrategy: 'xpath' },
        signUpName: 'input[name="name"]',
        signUpUsername: 'input[name="username"]',
        signUpEmail: 'input[name="email"]',
        signUpPassword: 'input[name="password"]',
        signUpButton: 'button[type="button"]',
        wizardCheckbox: { selector: '//div/input[@type="checkbox"]', locateStrategy: 'xpath' },
        cancel: 'div[class="menu-btn cancel-btn"]',
        logout: { selector: '(//*[@class="menu-icons"]) [1]', locateStrategy: 'xpath' },
        compose: { selector: '(//div/*[@class="btn-label"]) [3]', locateStrategy: 'xpath'},
        composeTitle: 'input[placeholder="Enter a title"]',
        composeText: { selector: '//div[@data-placeholder="Type your entry here."]', locateStrategy: 'xpath'},
        submitButton: { selector: '(//button[@type="button"]) [13]', locateStrategy: 'xpath'},
        previousEntries: { selector: '//*/h4[contains(text(),"Previous entries")]', locateStrategy: 'xpath'},
        entry: 'div[class="entry-list-map"]',
    },
}