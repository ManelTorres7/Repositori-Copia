
/*  En esta aplicación se intentaba acceder a todas las imagenes por categorias, bolsosz chandals, zapatillas, etc... de porfma automática
    viajando por carpetas y subcarpetas cosa que no ha sido possible porque al encontrar una carpeta vacia no hay un selector que se pueda 
    seleccionar para poder afirmar que esta carpeta esta vacia ya que cuando se consigue una referencia y se pasa a la siguiente fase del bucle 
    en la siguiente carpeta sigue obteniendo la referencia del anterior no entiendo muy bien porqué y se ejecuta en "continue;" en todos los 
    bucles que le preceden en las siguientes carpetas anulando asi las funciones incorporadas en el programa creado*/



const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();


  await page.goto("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/se8ABASK", {
    waitUntil: "domcontentloaded",
  });
  // Abri icono desplegable 
  /*await page.waitForSelector(`a[class='grid-url-arrow']`);  
  await page.click(`a[class='grid-url-arrow']`);

  //"abrir"
  await page.waitForSelector(`a[class='dropdown-item open-item']`);  
  await page.click(`a[class='dropdown-item open-item']`);
  await page.waitForTimeout(1000);

  // Select carpeta Zapatillas + keypress 'Enter'
  await page.click(`tr[id='4D9WXKqY']`);
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');*/

  await page.waitForTimeout(5000);
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

        valorDeVacio = await page.$eval(`div[class='fm-empty-cloud-txt'`, el=>el.innerText);
        console.log(valorDeVacio);

        if ( valorDeVacio == 'Nube vacía')    // 8 => Porque es el numero de carpetas del paartado anterior que recibira
                                  //   en caso de que este selector no este disponible en esta pagina
        { continue; }


        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
        await page.click(`button[class='v-btn simpletip close']`);
        await page.waitForTimeout(2000);
      }

    //Volver atras
    await page.waitForSelector(`a[data-id='se8ABASK']`);
    await page.click(`a[data-id='se8ABASK']`);
    

  }
  


})();

