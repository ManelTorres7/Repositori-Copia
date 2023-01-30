const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();


  await page.goto("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/4D9WXKqY", {
    waitUntil: "domcontentloaded",
  });
  // Abri icono desplegable 
  await page.waitForTimeout(5000);
  await page.waitForSelector(`input[class='js-filesearcher']`);  
  await page.type(`input[class='js-filesearcher']`, `36`);  
  await page.waitForTimeout(5000);


  //"abrir"
  /*await page.waitForSelector(`a[class='dropdown-item open-item']`);  
  await page.click(`a[class='dropdown-item open-item']`);
  await page.waitForTimeout(1000);

  // Select carpeta Zapatillas + keypress 'Enter'
  await page.click(`tr[id='4D9WXKqY']`);
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');


  await page.keyboard.press('ArrowDown');
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






  await page.reload();

  await page.waitForTimeout(5000);


            /*await page.keyboard.press('Enter');
            
            await page.waitForTimeout(3000);
            
            
            
            await page.waitForSelector(`a[data-id='4D9WXKqY']`);
          

            await page.click(`a[data-id='4D9WXKqY']`);

            await page.waitForTimeout(5000);*/


  // Bucle para modelos
  let x = 0

  for(let i = 0; i < totalCarpetas; i++) {

      x ++;
      console.log(x)
      // Bucle para ·Enters·
      for(let j = 0; j < x ; j++) {
        await page.keyboard.press('ArrowDown');
      }


    await page.keyboard.press('Enter');
    
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);

    const valorEncontrado2 = await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);

    

    const palabras2 = valorEncontrado2.split(' ');
  

    if ( palabras2.length == 7) {
    palabras2.splice(0, 3);
    palabras2.splice(1, 3);

    var totalColores = palabras2.join();




    await console.log("Total a recorrer" + totalColores + "\n");


    }else{
      totalColores = palabras2.join();
      totalColores = 1;
      await console.log("Total a recorrer" + totalColores + "\n"); 
    }

    /*await page.reload();
    await page.waitForTimeout(5000)*/
    await page.click(`a[title='Vista de lista']`);

    await page.waitForTimeout(3000); //espera en pagina colores

  
    
    
    valorEncontrado3 = await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);

    

    palabras3 = valorEncontrado3.split(' ');
    
      for ( let i = 0; i < totalColores; i++) { 

        constancia = palabras3[3];
        console.log(constancia)
        if ( constancia == '33') 
        { continue; }

        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
        await page.click(`button[class='v-btn simpletip close']`);
        await page.waitForTimeout(2000);
      }

    //Volver atras
    await page.waitForSelector(`a[data-id='4D9WXKqY']`);
    await page.click(`a[data-id='4D9WXKqY']`);
    

  }
  


})();

