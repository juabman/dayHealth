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
        dayHealthLogin.signUp('Tony Stark11', 'tstark11', 'Tony11@avengers.com', 'Ironman11')
    },
    //compose entry
    'Composing an entry': browser => {
        dayHealthLogin.compose('tstark11', 'Ironman11', 'Test Entry', 'I am feeling great today!')
    },
}