

const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
  await page.goto("https://www.facebook.com/marketplace/create/item", {
    waitFor: "domcontentloaded", delay: '10000'
  });

  await page.waitForSelector(`button[data-cookiebanner='accept_only_essential_button']`);  
  await page.click(`button[data-cookiebanner='accept_only_essential_button']`); 
 
  await page.waitForSelector(`input[type='text']`, 'barcelonashopp@gmail.com');
  await page.type(`input[type='text']`, 'barcelonashopp@gmail.com');
  await page.type(`input[type='password']`, 'Klkfacebook3');
  
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
 
  
 /* await page.click(`div[class='x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip']`);*/

  await page.goto("https://www.facebook.com/marketplace/create/item");
  await page.waitForTimeout(5000);

  

  //click en subir
  /*await page.click(`div[class='x1e56ztr x1xmf6yo x1n2onr6']`);
  await page.waitForTimeout(5000);*/
  
  //type en imput + enter
  /*await page.type(`input[accept='image/*,image/heif,image/heic']`, 'C:/Users/surfm/Desktop/imagenes/data-base.png');
  await page.keyboard.press('Enter');*/

  await page.waitForSelector(`input[accept='image/*,image/heif,image/heic']`);
  const elementHandle = await page.$(`input[accept='image/*,image/heif,image/heic']`);
  await elementHandle.uploadFile('imagenes_anuncio1/hellodo.png');
  await page.waitForTimeout(3000);

  await page.waitForSelector(`input[accept='image/*,image/heif,image/heic']`);
  const elementHandle2 = await page.$(`input[accept='image/*,image/heif,image/heic']`);
  await elementHandle2.uploadFile('imagenes_anuncio1/hola.png');
  await page.waitForTimeout(3000);
 

  await page.waitForSelector(`label[aria-label='Título']`);
  await page.type(`label[aria-label='Título']`, 'Zapatillas de todo tipo');

  await page.waitForSelector(`label[aria-label='Precio']`);
  await page.type(`label[aria-label='Precio']`, '45');

  await page.waitForSelector(`label[aria-label='Categoría']`);
  await page.click(`label[aria-label='Categoría']`);


  await page.click(`label[aria-label='Categoría']`);
  await page.waitForTimeout(2000)
  await page.click(`label[aria-label='Categoría']`);
  await page.waitForTimeout(2000);

  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.keyboard.press('Enter');


  await page.click(`label[aria-label='Estado']`);
  await page.waitForTimeout(1000)
  await page.click(`label[aria-label='Estado']`);
  await page.waitForTimeout(1000);
  await page.keyboard.press('U');
  await page.keyboard.press('Enter');

  await page.type(`label[aria-label='Talla']`, 'Todas las tallas');

  await page.type(`label[aria-label='Marca']`, 'Distintas marcas');

  await page.type(`label[aria-label='Descripción']`, `Zapatillas de todo tipo.
                   Envíos en 48h Contrarrembolso, lo pagas al repartidor cuando te llega.
                   También entrega en mano.
                   Todas las tallas.
                   636291682`);

  await page.click(`label[aria-label='Disponibilidad']`);
  await page.waitForTimeout(1000)
  await page.click(`label[aria-label='Disponibilidad']`);
  await page.waitForTimeout(1000);

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  await page.waitForSelector(`label[aria-label='Etiquetas de producto']`);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Zapatillas');
  await page.waitForTimeout(500);

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Nike');

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Adidas');

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Puma');

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Airmax');

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'Marca');

  await page.keyboard.press('Enter')
  await page.waitForTimeout(500);
  await page.type(`label[aria-label='Etiquetas de producto']`, 'chico');

  await page.keyboard.press('Enter')
  await page.type(`label[aria-label='Etiquetas de producto']`, 'chica');
  await page.keyboard.press('Enter')










  





 

})();