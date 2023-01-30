const general = document.querySelector('.general');
const button = document.querySelector('.button1');
const button2 = document.querySelector('.button2');


        var height = 100;
        var uno = 5;
        var width = 100;
        var num = 100




    button.addEventListener('click', () => {

        
        num = num * 1.5;
    
        console.log(num)
        general.style.height = num + "px";
        general.style.width = num + "px";

        //if(num > 900) {
        //    num = num + 50;
        //console.log(num)
        //general.style.height = num + "px";
        //general.style.width = num + "px";

        //}
    })

 
    window.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            
            num = num * 1.5;
    
        console.log(num)
        general.style.height = num + "px";
        general.style.width = num + "px";

          
        }
    });

    window.addEventListener('keypress', function (e) {
        if (e.key === 'Control') {
            
            num = num * 1.5;
    
        console.log(num)
        general.style.height = num + "px";
        general.style.width = num + "px";

          
        }
    });



    button2.addEventListener('click', () => {

        general.style.backgroundColor = 'blue';
        num = num / 1.5;
    
        console.log(num)
        general.style.height = num + "px";
        general.style.width = num + "px";

    })






