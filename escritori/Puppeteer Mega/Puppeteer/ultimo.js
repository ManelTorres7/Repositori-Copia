

const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();


  await page.goto("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/VKkilQ7b", {
    waitUntil: "domcontentloaded",
  });
  
  await page.waitForTimeout(5000);
  await page.keyboard.press('ArrowDown');  
  await page.waitForTimeout(5000);

  await page.waitForSelector(`span[class='selection-bar-col']`);
  const valorEncontrado=await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);
  await console.log(valorEncontrado);

  const palabras = valorEncontrado.split(' ');
  /*palabras.pop();
  palabras.pop();    Reducido =>
  palabras.pop();*/
  palabras.splice(0, 3);
  palabras.splice(1, 3);

  totalCarpetas = palabras.join();

  await console.log(totalCarpetas);

  await page.keyboard.press('Enter');

 




  // Bucle para colores

  for(let i = 0; i < totalCarpetas; i++) { 
    
    await page.waitForTimeout(5000);
    await page.keyboard.press('ArrowRight');
  };

  await browser.close();

  console.log("Operación finalizado correctamente.")    

}
  


)();

