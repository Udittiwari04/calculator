let string="";
let boxs=document.querySelectorAll('.box');
Array.from(boxs).forEach((box)=>{
    box.addEventListener('click', (e)=>{
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.textarea').innerHTML=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=' ';
            document.querySelector('.textarea').innerHTML=string
        }
        else if(e.target.innerHTML=='C'){
         const arr=Array.from(string)
             arr.pop();
             let text = arr.toString();
            document.querySelector('.textarea').innerHTML=text

        }
        else{
            string= string + e.target.innerHTML;
            document.querySelector('.textarea').innerHTML=string
        }
       
        
    })
})

