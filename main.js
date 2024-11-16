 let x = document.getElementById('up');
  
 window.onscroll=function(){{
    if(scrollY>80){
        x.classList.remove('hide');
    }
    else if( scrollY<80) {
        x.classList.add('hide');
    }
 }}

function goo(){
    scrollTo(0,0);
}
 
 