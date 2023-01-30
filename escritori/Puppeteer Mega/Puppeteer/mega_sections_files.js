

const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

  bolsos = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/4P10VKTT");
 /* cinturones = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/VKkilQ7b");

  chandals =("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/0b0jiAqJ");
  chandalChica = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/9WsTlIIa");
  chandalsNiño = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/kes3wQCS");
  chaquetas = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/sflz0Agb");
  mallas = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/9T8F3IAR");
  sudaderas =("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/RGtFWabD")

  riñoneras = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/oOtgEYwD");*/


  
  


  await page.goto(bolsos, { waitUntil: "domcontentloaded",});
  
    await page.waitForTimeout(5000);
    await page.keyboard.press('ArrowDown');
    await page.waitForSelector(`span[class='selection-bar-col']`);
    const valorEncontrado=await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);
    await page.waitForTimeout(5000);
    

    await console.log(valorEncontrado);
    
    const palabras = valorEncontrado.split(' ');
    palabras.splice(0, 3);
    palabras.splice(1, 3);

    totalCarpetas = palabras.join();

    await console.log(totalCarpetas);






    await page.keyboard.press('Enter');
   

   


            

    

    // Bucle para modelos
    

    for(let i = 0; i < totalCarpetas; i++) {

       
      await page.waitForTimeout(5000);

      await page.keyboard.press('ArrowRigth');
     
      
          

      //Volver atras
         
    }
    await browser.close();
  
 







})();

