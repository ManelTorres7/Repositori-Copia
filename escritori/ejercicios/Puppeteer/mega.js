

const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
  await page.goto("https://youtube.com", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector(`ytd-button-renderer[class='signin style-scope ytd-consent-bump-v2-lightbox']`);  
  await page.click(`ytd-button-renderer[class='signin style-scope ytd-consent-bump-v2-lightbox']`);

  await page.waitForSelector(`input[type='email']`);  
  await page.type(`input[type='email']`, 'maneltorresklk@gmail.com');  
  await page.click(`button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']`);  

})();