const puppeteer = require('puppeteer');

(async()=> {
    const browser=  await puppeteer.launch({
        headless: false
    });
    const page=await browser.newPage();

    await loadUrl(page, "https://coronavirus.app/tracking/mexico", browser);
})();

async function loadUrl(page, url, browser){
    await page.goto(url,{
        waitUntil:["load", "domcontentloaded", "networkidle0", "networkidle2"]
    });

    const valorEncontrado=await page.$eval(".section-el > .section-el-inner > .section-el-number", el=>el.innerHTML);
    await console.log("\ncasos totales en México: "+valorEncontrado+"\n");

}