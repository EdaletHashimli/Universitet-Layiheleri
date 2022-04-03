function cond() {
    var a,y,x,w;
    a=Number(document.forma.a.value);
    x=Number(document.forma.x.value);
    if ( x>1) {
    y=Math.tan(x+1);
    }
    else
    if (x<=1) 
    y= (Math.pow((Math.sin())) * Math.abs(a * x))
    
    else{

    }
   
    document.forma.y.value= y;
   
    }
    

let elements = document.querySelectorAll('#button');
elements.forEach((element) => {  
  element.addEventListener('click', cond());

});

    