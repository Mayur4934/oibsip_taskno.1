
let screenVal = '';
let scrn = document.getElementById('scrn');
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log('Button text is ', btnText);
        if (btnText == 'X') {
            btnText = '*';
            screenVal += btnText;
            scrn.value = screenVal;
        }
        else if (btnText == 'C') {
            screenVal = "";
            scrn.value = screenVal;
        }
       
        else if (btnText == '=') {
            if(scrn.value.match('SIN')) {
                let num = (scrn.value.substring(4, scrn.value.length - 1));
                let radians = (Math.PI / 180) * num;
                scrn.value = Math.sin(radians);// code for sin
            }
            else if(scrn.value.match('COS')) {
                let num1 = (scrn.value.substring(4, scrn.value.length - 1));
                let radians1 = (Math.PI / 180) * num1;
                scrn.value = Math.cos(radians1);// code for sin
            } 
            else if(scrn.value.match('TAN')) {
                let num2 = (scrn.value.substring(4, scrn.value.length - 1));
                let radians2 = (Math.PI / 180) * num2;
                scrn.value = Math.tan(radians2);// code for sin
            }  

            

            else if(scrn.value.match('SQRT')) {
                let num4 = (scrn.value.substring(5, scrn.value.length - 1));
                scrn.value =Math.sqrt(num4);// code for sin
            } 
            


            
            
            else {
                scrn.value = eval(screenVal);
            }
        }
       

       
        else {
            screenVal += btnText;
            scrn.value = screenVal;
        }

    })
}
