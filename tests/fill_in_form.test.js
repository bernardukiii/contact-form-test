// Here I need to write the actual tests that call the functions in the js file. All of them need to be set with async await

import puppeteer from 'puppeteer';
import { goToBDKI } from './bdki-portfolio'

beforeAll( async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await goToBDKI(page)
  return browser
})

describe('Open page in browser', () => {
    test('Opens portfolio', async () => {
      console.log(page)
    });
});