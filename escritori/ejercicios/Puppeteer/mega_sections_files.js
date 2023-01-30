
/*  En esta aplicación se intentaba acceder a todas las imagenes por categorias, bolsosz chandals, zapatillas, etc... de porfma automática
    viajando por carpetas y subcarpetas cosa que no ha sido possible porque al encontrar una carpeta vacia no hay un selector que se pueda 
    seleccionar para poder afirmar que esta carpeta esta vacia ya que cuando se consigue una referencia y se pasa a la siguiente fase del bucle 
    en la siguiente carpeta sigue obteniendo la referencia del anterior no entiendo muy bien porqué y se ejecuta en "continue;" en todos los 
    bucles que le preceden en las siguientes carpetas anulando asi las funciones incorporadas en el programa creado*/



const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

  bolsos = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/4P10VKTT");
  cinturones = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/VKkilQ7b");

  chandals =("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/0b0jiAqJ");
  chandalChica = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/9WsTlIIa");
  chandalsNiño = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/kes3wQCS");
  chaquetas = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/sflz0Agb");
  mallas = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/9T8F3IAR");
  sudaderas =("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/RGtFWabD")

  riñoneras = ("https://mega.nz/folder/EPVQySiA#y39ei5DBd2YgwVlG0xMSjQ/folder/oOtgEYwD");


  
  


  await page.goto(bolsos, {
    waitUntil: "domcontentloaded",
  });
  async function sBolsos(){
    await page.waitForTimeout(5000);
    await page.keyboard.press('ArrowDown');
    await page.waitForSelector(`span[class='selection-bar-col']`);
    const valorEncontrado=await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);
    await console.log(valorEncontrado);
    
    const palabras = valorEncontrado.split(' ');
    palabras.splice(0, 3);
    palabras.splice(1, 3);

    totalCarpetas = palabras.join();

    await console.log(totalCarpetas);






    await page.reload();

    await page.waitForTimeout(5000);


            

    

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
      await page.waitForTimeout(5000);

      
          

      //Volver atras
          await page.waitForTimeout(1000);
          await page.click(`button[class='v-btn simpletip close']`);
          await page.waitForTimeout(2000);

    }
    await browser.close();
  };  
  sBolsos();


  await page.goto(cinturones, {
    waitUntil: "domcontentloaded",
  });
  async function sCinturones(){
    await page.waitForTimeout(5000);
    await page.keyboard.press('ArrowDown');
    await page.waitForSelector(`span[class='selection-bar-col']`);
    const valorEncontrado=await page.$eval(`span[class='selection-bar-col`, el=>el.innerText);
    await console.log(valorEncontrado);
    
    const palabras = valorEncontrado.split(' ');
    palabras.splice(0, 3);
    palabras.splice(1, 3);
  
    totalCarpetas = palabras.join();
  
    await console.log(totalCarpetas);
  
  
  
  
  
  
    await page.reload();
  
    await page.waitForTimeout(5000);
  
  
            
  
    
  
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
      await page.waitForTimeout(5000);
  
      
          
  
      //Volver atras
          await page.waitForTimeout(1000);
          await page.click(`button[class='v-btn simpletip close']`);
          await page.waitForTimeout(2000);
  
    }
    };  
    sCinturones();




})();

