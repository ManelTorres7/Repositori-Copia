

(async () => {
    const puppeteer = require('puppeteer');

    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto('https://www.scrapethissite.com/pages/forms');
    await page.screenshot({path: 'hellodo.png'})
    await page.type('#q', 'hello')
    
 
    
})();