// Here I need to write the actual meat of the test cases
// 1) I need to first open the browser with this url https://bdki-portfolio.vercel.app/ I need to make sure it doesn't do it headless first, to see what happens
// 2) I need to scroll to bottom and find the form input elements by xPath
// 3) I need to fill them using fill input field and the click the send button
// Make sure to setTimeOut() for a couple seconds so it goes slowly and I can check what it goes doing

import puppeteer from 'jest-puppeteer';

export async function goToPage() {
    let browser, page;

    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://bdki-portfolio.vercel.app/');
    setTimeout(5000)

    console.log('Success. Page is open!')
}