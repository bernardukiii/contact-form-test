const { beforeAll, afterAll, describe, it } = require('@jest/globals');
const puppeteer = require('puppeteer');

function fillContactForm() {
  var browser, page 
  describe('Open page in browser', () => {
    
    beforeAll( async () => {
      browser = await puppeteer.launch({ headless: false })
      page = await browser.newPage()
      await page.goto('http://localhost:3000/');
    
    })

    afterAll( async () => {
      browser.close()
    })
    
    it('Fills in form', async () => {
      // Going down to contact form
      var contactButton = await page.$x('//button[contains(text(), "CONTACT")]')
      if (contactButton.length > 0) {
        contactButton[0].click()
      } else {
        console.log('Button not found')
      }
      // Filling form
      var nameField = await page.$x("//input[@name='userName']")
      var surnameField = await page.$x("//input[@name='userSurname']")
      var emailField = await page.$x("//input[@name='userEmail']")
      var textField = await page.$x("//textarea[@name='userMessage']")
      var submitButton = await page.$x("//button[contains(text(), 'SUBMIT')]")

      await nameField[0].type('Test')
      await surnameField[0].type('Testing')
      await emailField[0].type('bdki.development@gmail.com')
      await textField[0].type('Just testing to see that this works properly.')
      await submitButton[0].click()

    }, 10000)
  })
}

export default fillContactForm() 