let inicio = document.getElementById("inicio");
let header = document.getElementById("header");


inicio.style.color = "rgb(244, 142, 105)";

function onScroll() {
    console.log("Scrolled 50px!");
  }
  
  // Agrega un evento de escucha de scroll al documento
  document.addEventListener("scroll", function() {
    // Obtiene la cantidad de píxeles que se han scrolleado desde el inicio del documento
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    // Comprueba si se ha scrolleado 50px o más
    if (scrollTop > 200) {
      // Ejecuta la función si se cumple la condición
      header.style.backgroundColor= "rgb(8, 19, 17)";
      header.style.transition = ".5s";
      header.style.height= "60px";
      header.style.position= "fixed";
      header.style.top= "0px";

      //onScroll();
    } else if(scrollTop < 100) {
        header.style.backgroundColor= "transparent";
        header.style.height= "80px";
        header.style.position= "absolute";

        // Posar que el header tingui un top de -80px(diria que aquesta es la funció)
        // y a la vegada que faxi una transicio de 1s aprox cap avall uns 80x tan sigui amb css normal o amb una animacio query.



    }
  });




