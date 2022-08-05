const puppeteer = require('puppeteer');

describe('e2e tests', () => {

  it('finds Finland', async () => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto('http://dog-frontend:3001/countries');
    await page.waitForSelector('#countries');
    const textContent = await page.$eval('body', (el) => el.textContent);
    const includes = textContent.includes('Finland');
    expect(includes).toBe(true);
    await browser.close();
  });
});
