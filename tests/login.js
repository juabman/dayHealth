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
    //test for signing up, signing in, and username taken
    'SignUp, signIn, and username taken': browser => {
        dayHealthLogin.signUp('Tony Stark2', 'tstark2', 'Tony2@avengers.com', 'Ironman2')
    },
    //compose entry
    'Composing an entry': browser => {
        dayHealthLogin.compose('tstark2', 'Ironman2', 'Test Entry', 'I am feeling great today!')
    },
}