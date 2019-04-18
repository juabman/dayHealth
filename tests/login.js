var dayHealthLogin = {}


module.exports = {
    beforeEach: browser => {
        browser.url('https://www.dayhealth.space/#/')
        dayHealthLogin = browser.page.dayHealth()
        dayHealthLogin.navigate()
    },
    after: browser => {
        browser.end()
    },
    // //test for signing up, signing in, and username taken
    // 'SignUp, signIn, and username taken': browser => {
    //     dayHealthLogin.signUp('Test10', 'Test10', 'Test10@test.com', 'Test10')
    // },
    //compose entry
    'Composing an entry': browser => {
        dayHealthLogin.compose('Test10', 'Test10', 'Test Entry', 'I am feeling great today!')
    },
}