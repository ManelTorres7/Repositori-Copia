const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();       
    const page = await browser.newPage();

    await page.goto('https://www.youtube.com/watch?v=GPktgPJE4VU&t=442s');
    await page.screenshot({ path: 'amazon1.jpg' });

    await page.type('#search', 'libros')
    await page.screenshot({ path: 'amazon2.jpg' });

    await browser.close();
})