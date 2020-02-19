/* First Import the node library */
const puppeteer = require('puppeteer');

/* */
async function scrapeProduct(url) {
    /* Launch a browser */
    const browser = await puppeteer.launch();
    /* Create blank page in browser */
    const page = await browser.newPage();
    /*  Send bot to url*/
    await page.goto(url);

    /* To scrape anything on the page it take three commands */
    const [el] = await page.$x('//*[@id="top"]/header/div[1]/div/div/a/img');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="cs-content"]/div[2]/div/div[1]/div/p');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="cs-content"]/div[2]/div/div[1]/div/p');
    const txt = await el3.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({ srcTxt, rawTxt });

    /* Close browser */
    browser.close();
}

/* Function call to url */
scrapeProduct("https://comicbookreadingorders.com/marvel/events/age-of-apocalypse-reading-order/");