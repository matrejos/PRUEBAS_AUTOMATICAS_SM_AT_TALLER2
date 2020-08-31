const puppeteer = require('puppeteer');
const { expect }  = require('chai');

describe('Register test', () => {

    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
        await page.waitForNavigation({ waitUntil: 'Load' })
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should have the correct page title', async () => {
        await page.waitForNavigation({ waitUntil: 'Load' })
        expect(await page.title()).to.eql('Angular 6 User Registration and Login Example');
        done();
    });

    it('should show a warning when searching fake word', async () => {
        await page.type('input[name=firstName]', 'NomrbePrueba');
        await page.type('input[name=lastName]', 'ApellidoPrueba');
        await page.type('input[name=username]', 'prueba');
        await page.type('input[name=password]', 'prueba2020');

        const element = await page.$('[href="/login"]');
        await element.click();

        //await page.click('input[type="submit"]');
        //await page.waitForSelector('h2 a');
        //const links = await page.evaluate(() => {
        //    return Array.from(document.querySelectorAll('h2 a'));
        //});
        expect(links.length).to.be.greaterThan(0);
    });

    it('should show a warning when searching fake word', async () => {
        await page.type('input[id=search_form_input_homepage]', 'pupuppeppeteerteer');
        await page.click('input[type="submit"]');
        await page.waitForSelector('div[class=msg__wrap]');
        const text = await page.evaluate(() => {
            return document.querySelector('div[class=msg__wrap]').textContent;
        });
        expect(text).to.contain('Not many results contain');
    });

});